import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import PracticeStage from '../components/PracticeStage';
import { useNavigation } from '@react-navigation/native';
import StageLabels from '../components/StageLabels';

const PracticeStageScreen = () => {
  const numberOfStages = 30;
  const navigation = useNavigation();
  const [completedStages, setCompletedStages] = React.useState(
    Array(numberOfStages).fill(false)
  );

  const onPress = (stageNumber, stageLabel) => {
    navigation.navigate('DrawingScreen', {
      stageNumber: stageNumber,
      stageLabel: stageLabel,
      completedStages: completedStages,
      setCompletedStages: setCompletedStages,
    });
  };

  const stageArray = Array.from({ length: numberOfStages }, (_, index) => {
    const stageLabel = StageLabels[index];
    return (
      <PracticeStage
        key={index + 1}
        stageNumber={index + 1}
        stageLabel={stageLabel}
        onPress={onPress}
      />
    );
  });

  return (
    <View>
      <Text style={styles.title}>학습하기</Text>
      <ScrollView contentContainerStyle={styles.stageContainer}>
        {stageArray.map((stage, index) => (
          <PracticeStage
            key={index + 1}
            stageNumber={index + 1}
            stageLabel={StageLabels[index]}
            onPress={onPress}
            isCompleted={completedStages[index]}
          />
        ))}
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
export default PracticeStageScreen;