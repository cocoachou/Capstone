import React from 'react';
import { View, Button, Modal, TouchableOpacity, Text, PanResponder } from 'react-native';
import Canvas, { Image as CanvasImage } from 'react-native-canvas';
import ViewShot from "react-native-view-shot";
import styles from '../components/Drawing'; 

class DrawingScreen extends React.Component {
  state = {
    canvasTop: 0,
    canvasLeft: 0,
  };

  ViewShot = React.createRef();
  canvas = null;
  ctx = null;
  lines = [];
  currentLine = [];
  currentLine = { points: [], color: 'black' };
  panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: (event) => {
      const { pageX, pageY } = event.nativeEvent;
      const { canvasTop, canvasLeft } = this.state;
      const x = pageX - canvasLeft;
      const y = pageY - canvasTop;
      
      if (x >= 0 && x <= this.canvas.width && y >= 0 && y <= this.canvas.height) {
        this.currentLine = { points: [], color: this.ctx.strokeStyle };
        this.lines.push(this.currentLine);
      }
    },
    onPanResponderMove: (event) => {
      const { pageX, pageY } = event.nativeEvent;
      const { canvasTop, canvasLeft } = this.state;
      const x = pageX - canvasLeft;
      const y = pageY - canvasTop;
    
      if (x >= 0 && x <= this.canvas.width && y >= 0 && y <= this.canvas.height) {
        this.currentLine.points.push([x, y]);
    this.redraw();
      }
    },
    onPanResponderRelease: () => {
      this.redraw();
    },
  });

  componentDidMount() {
    this.ctx = this.canvas.getContext('2d');
    this.ctx.strokeStyle = 'black';
    this.ctx.lineWidth = 5;
    this.setState({ showModal: false });
  }

  handleCanvas = (canvas) => {
    if (canvas) {
      this.canvas = canvas;
      this.canvas.width = 300;
      this.canvas.height = 500;
      this.ctx = canvas.getContext('2d');
      this.ctx.strokeStyle = 'black';
      this.ctx.lineWidth = 5;
    }
  };

  onCanvasLayout = (event) => {
    this.setState({
      canvasTop: event.nativeEvent.layout.y,
      canvasLeft: event.nativeEvent.layout.x,
    });
  };

  handleColor = (color) => {
    this.ctx.strokeStyle = color;
  };

  handleEnd = async () => {
    if (this.ViewShot.current) {
      try {
        const uri = await this.ViewShot.current.capture();
        console.log("do something with ", uri);
        this.setState({ showModal: true, uri });
      } catch (error) {
        console.error('Error capturing ViewShot:', error);
      }
    }
  };

  handleRetry = () => {
    this.setState({ showModal: false, uri: '' });
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.lines = []; // 선들의 배열 초기화
  };
  

  redraw = () => {
    this.ctx.clearRect(0, 0, 300, 500);
    this.lines.forEach((line) => {
      this.ctx.strokeStyle = line.color;
      this.ctx.beginPath();
      line.points.forEach(([x, y], i) => {
        if (i === 0) {
          this.ctx.moveTo(x, y);
        } else {
          this.ctx.lineTo(x, y);
        }
      });
      this.ctx.stroke();
    });

  };
  constructor(props) {
    super(props);
    this.ViewShot = React.createRef();
    this.setting = {
      showModal: false,
      uri: '',
    };
  }
  render() {
    const { showModal } = this.state;
    const colors = ['black', 'white', 'red', 'blue', 'green', 'yellow'];
    return (
      <View {...this.panResponder.panHandlers}>
        <Modal visible={showModal} transparent={true}>
          <View style={styles.modalStyle}>
            <View style={styles.modalInnerStyle}>
              <Text style={{fontSize: 40, marginBottom: 50}}>점수: </Text>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity style={[styles.buttonStyle, {marginRight: 10}]} onPress={this.handleRetry}>
                  <Text style={{textAlign: 'center'}}>다시하기</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => this.setState({ showModal: false })}>
                  <Text style={{textAlign: 'center'}}>완료하기</Text>
                </TouchableOpacity> 
              </View>
            </View>
          </View>
        </Modal>

        <ViewShot ref={this.ViewShot} options={{ format: 'png', quality: 1 }}>
          <Canvas ref={this.handleCanvas} style={styles.canvasStyle} onLayout={this.onCanvasLayout} />
        </ViewShot>
  
        <View style={{flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap'}}>
          {colors.map((color) => (
            <TouchableOpacity key={color} onPress={() => this.handleColor(color)}>
              <View style={[styles.colorBox, {backgroundColor: color}]} />
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.textStyle}>글자</Text>
        <View style={{marginTop: 50, justifyContent: 'flex-end', alignItems: 'center'}}>
          <TouchableOpacity onPress={this.handleEnd} style={styles.endButtonStyle}>
            <Text style={{fontSize: 16}}>완료</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default DrawingScreen;
