import React, { useRef, useState } from 'react';
import {
  View,
  Button,
  Modal,
  TouchableOpacity,
  Text,
  PanResponder,
} from 'react-native';
import Canvas, { Image as CanvasImage } from 'react-native-canvas';
import ViewShot from 'react-native-view-shot';
import styles from '../components/Drawing';
import LoadFile from '../components/LoadFile';
import StageLabels from '../components/StageLabels';

const PracticeDrawingScreen = ({ route, navigation }) => {
  const [canvasTop, setCanvasTop] = useState(0);
  const [canvasLeft, setCanvasLeft] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [uri, setUri] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  const ViewShotRef = useRef();

  const lines = useRef([]);
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  const handleCanvas = (canvas) => {
    if (canvas) {
      canvasRef.current = canvas;
      canvas.width = 300;
      canvas.height = 500;
      ctxRef.current = canvas.getContext('2d');
      ctxRef.current.strokeStyle = 'black';
      ctxRef.current.lineWidth = 5;
    }
  };

  const onCanvasLayout = (event) => {
    setCanvasTop(event.nativeEvent.layout.y);
    setCanvasLeft(event.nativeEvent.layout.x);
  };

  const handleColor = (color) => {
    ctxRef.current.strokeStyle = color;
  };

  const handleEnd = async () => {
    if (!ViewShotRef.current || !canvasRef.current) return;

    try {
      const uri = await ViewShotRef.current.capture({
        format: 'png',
        quality: 1,
      });

      await LoadFile(uri, StageLabels[route.params.stageNumber - 1]);
      console.log('capture:', uri);

      const resultData = require('../../data/result.json');
      const resultMessage = resultData.result === '1' ? '참 잘했어요!' : '다시 해봐요!';

      setUri(uri);
      setResultMessage(resultMessage);
      setShowModal(true);
    } catch (error) {
      console.error('error: ', error);
    }
  };

  const handleRetry = () => {
    setShowModal(false);
    setUri('');
    ctxRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    lines.current = [];
  };

  const redraw = () => {
    ctxRef.current.clearRect(0, 0, 300, 500);
    lines.current.forEach((line) => {
      ctxRef.current.strokeStyle = line.color;
      ctxRef.current.beginPath();
      line.points.forEach(([x, y], i) => {
        if (i === 0) {
          ctxRef.current.moveTo(x, y);
        } else {
          ctxRef.current.lineTo(x, y);
        }
      });
      ctxRef.current.stroke();
    });
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: (event) => {
      const { locationX, locationY } = event.nativeEvent;
      const x = locationX - canvasLeft;
      const y = locationY - canvasTop;

      if (
        x >= 0 &&
        x <= canvasRef.current.width &&
        y >= 0 &&
        y <= canvasRef.current.height
      ) {
        lines.current.push({ points: [], color: ctxRef.current.strokeStyle });
      }
    },
    onPanResponderMove: (event) => {
      const { locationX, locationY } = event.nativeEvent;
      const x = locationX - canvasLeft;
      const y = locationY - canvasTop;

      if (
        x >= 0 &&
        x <= canvasRef.current.width &&
        y >= 0 &&
        y <= canvasRef.current.height
      ) {
        lines.current[lines.current.length - 1].points.push([x, y]);
        redraw();
      }
    },
  });

  return (
    <View>
      <Text style={styles.textStyle}>{route.params.stageLabel}</Text>
      <View {...panResponder.panHandlers}>
        <Modal visible={showModal} transparent={true}>
          <View style={styles.modalStyle}>
            <View style={styles.modalInnerStyle}>
              <Text style={styles.modalInnerText}>{resultMessage}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <TouchableOpacity
                  style={[styles.buttonStyle]}
                  onPress={handleRetry}
                >
                  <Text style={{ textAlign: 'center' }}>다시하기</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={() => {
                    setShowModal(false);
                    route.params.setCompletedStages((prevStages) => {
                      const newStages = [...prevStages];
                      newStages[route.params.stageNumber - 1] = true;
                      return newStages;
                    });
                    navigation.goBack();
                  }}
                >
                  <Text style={{ textAlign: 'center' }}>나가기</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <ViewShot ref={ViewShotRef} options={{ format: 'png', quality: 1 }}>
          <View style={{ backgroundColor: 'white' }}>
            <Canvas
              ref={handleCanvas}
              style={styles.canvasStyle}
              onLayout={onCanvasLayout}
            />
          </View>
        </ViewShot>

        <View style={styles.colorbox}>
          {['black', 'white', 'red', 'blue', 'green', 'yellow'].map((color) => (
            <TouchableOpacity
              key={color}
              onPress={() => handleColor(color)}
            >
              <View style={[styles.colorBox, { backgroundColor: color }]} />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.endBottonView}>
          <TouchableOpacity
            onPress={handleEnd}
            style={styles.endButtonStyle}
          >
            <Text style={styles.endButtonText}>완료</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PracticeDrawingScreen;