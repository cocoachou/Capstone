import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const PracticeStage = ({ stageNumber, stageLabel, onPress, isCompleted }) => {
  const handlePress = () => onPress(stageNumber, stageLabel);
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.buttonContainer,
        isCompleted
          ? { backgroundColor: 'gray' }
          : { backgroundColor: '#DDDDDD' },
      ]}
    >
      <Text style={styles.buttonText}>{stageLabel}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    width: 100,
    height: 100,
    padding: 10,
    margin: 7,
    backgroundColor: '#DDDDDD',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  buttonText: {
    fontSize: 16,
  },
});
export default PracticeStage;