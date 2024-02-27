import { View, ScrollView, StyleSheet, Text } from 'react-native';
import Stage from '../components/Stage';
import { useNavigation } from '@react-navigation/native';
import StageLabels from '../components/StageLabels';

const StageScreen = () => {
  const numberOfStages = 30;
  const navigation = useNavigation();

  const onPress = (stageNumber, stageLabel) => {
    navigation.navigate('DrawingScreen', { stageLabel });
  };

  const stageArray = Array.from({ length: numberOfStages }, (_, index) => {
    const stageLabel = StageLabels[index]; // stageNumber와 동일한 인덱스의 stageLabel을 가져옴
    return (
      <Stage key={index + 1} stageNumber={index + 1} stageLabel={stageLabel} onPress={onPress} />
    );
  });
  

  return (
    <View>
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
