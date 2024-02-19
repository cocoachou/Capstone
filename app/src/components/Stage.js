import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';


const Stage = ({ stageNumber, stageLabel, onPress, isCompleted }) => {
  const handlePress = () => onPress(stageNumber, stageLabel); // stageLabel을 그대로 전달
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.buttonContainer,
        isCompleted ? { backgroundColor: 'gray' } : { backgroundColor: '#DDDDDD' },
      ]}
    >
      <View>
        <Text style={styles.buttonText}>Stage {stageNumber}</Text>
      </View>
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
  },
  buttonText: {
    fontSize: 16,
  },
});

export default Stage;
