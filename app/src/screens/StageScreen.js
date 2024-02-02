import { View, ScrollView, StyleSheet, Text } from 'react-native';
import Stage from '../components/Stage';

const StageScreen = () => {
  const numberOfStages = 30;

  const stageArray = Array.from({ length: numberOfStages }, (_, index) => (
    <Stage key={index + 1} stageNumber={index + 1} />
  ));

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
    marginTop: 60,
    fontSize: 30,
    textAlign: 'center',
  },
});

export default StageScreen;
