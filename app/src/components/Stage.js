import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const Stage = ({ stageNumber, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(stageNumber)}
      style={styles.buttonContainer}
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
