import { View, ScrollView, StyleSheet, Text } from 'react-native';
import Stage from '../components/Stage';
import { useNavigation } from '@react-navigation/native';

const StageScreen = () => {
  const numberOfStages = 30;
  const navigation = useNavigation();
  const stageLabels = ['test1','test2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'];

  const onPress = (stageNumber, stageLabel) => {
    navigation.navigate('MainDrawing', { stageLabel });
  };

  const stageArray = Array.from({ length: numberOfStages }, (_, index) => {
    const stageLabel = stageLabels[index]; // stageNumber와 동일한 인덱스의 stageLabel을 가져옴
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
