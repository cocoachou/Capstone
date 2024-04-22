import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';


const Stage = ({ stageNumber, stageLabel, onPress, isCompleted, isLocked }) => {
  const handlePress = () => {
    if (!isLocked) {
      onPress(stageNumber, stageLabel); // 잠겨있지 않은 경우에만 onPress 함수 호출
    }
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.buttonContainer,
        isCompleted ? { backgroundColor: 'gray' } : { backgroundColor: '#DDDDDD' },
      ]}
    >
       <View>
        <Text style={styles.buttonText}>
          Stage {stageNumber} {isLocked && "🔒"} {/* 잠금 상태일 때 🔒 아이콘 표시 */}
        </Text>
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
