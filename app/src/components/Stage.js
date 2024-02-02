import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const Stage = ({ stageNumber, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(stageNumber)} style={styles.buttonContainer}>
      <View>
        <Text style={styles.buttonText}>Stage {stageNumber}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default Stage;