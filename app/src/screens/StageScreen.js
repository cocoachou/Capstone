import { View, ScrollView, StyleSheet } from 'react-native';
import Stage from '../components/Stage';

const StageScreen = () => {
  const numberOfStages = 30;

  const stageArray = Array.from({ length: numberOfStages }, (_, index) => (
    <Stage key={index + 1} stageNumber={index + 1} />
  ));

  return (
    <ScrollView contentContainerStyle={styles.stageContainer}>
      {stageArray}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  stageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default StageScreen;
