import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import Stage from '../components/Stage';
import { useNavigation } from '@react-navigation/native';
import StageLabels from '../components/StageLabels';

const StageScreen = () => {
  const numberOfStages = 30;
  const navigation = useNavigation();
  const [completedStages, setCompletedStages] = React.useState(
    Array(numberOfStages).fill(false)
  );
  const [lockedStages, setLockedStages] = React.useState(
    Array(numberOfStages).fill(true).map((_, index) => index > 0)
  ); // 첫 번째 스테이지만 잠금 해제

  const onPress = (stageNumber, stageLabel) => {
    const resultData = require('../../data/result.json');
    const updatedCompletedStages = [...completedStages];
    const updatedLockedStages = [...lockedStages];
    if (resultData.result === 1) {
      updatedCompletedStages[stageNumber - 1] = true;
      setCompletedStages(updatedCompletedStages);
      
      if (stageNumber < numberOfStages) {
        updatedLockedStages[stageNumber] = false; // 현재 스테이지의 다음 스테이지 잠금 해제
      }
      setLockedStages(updatedLockedStages);
    }
    navigation.navigate('DrawingScreen', {
      stageNumber: stageNumber,
      stageLabel: stageLabel,
      completedStages: updatedCompletedStages,
      setCompletedStages: setCompletedStages,
    });
  };

  const stageArray = Array.from({ length: numberOfStages }, (_, index) => {
    const stageLabel = StageLabels[index]; // stageNumber와 동일한 인덱스의 stageLabel을 가져옴
    return (
      <Stage
        key={index + 1}
        stageNumber={index + 1}
        stageLabel={stageLabel}
        onPress={onPress}
        isCompleted={completedStages[index]}
        isLocked={lockedStages[index]} // 잠금 상태 prop 전달
      />
    );
  });

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Stage</Text>
      <ScrollView contentContainerStyle={styles.stageContainer}>
        {stageArray}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  stageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  title: {
    margin: 30,
    fontSize: 30,
    textAlign: 'center',
  },
});

export default StageScreen;