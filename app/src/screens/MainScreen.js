import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MainScreen = () => {
  const navigation = useNavigation();

  const PressGameStart = () => {
    navigation.navigate('StageScreen');
  };

  const PressPracticeStart = () => {
    navigation.navigate('PracticeStageScreen');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/back.jpg')}
        style={styles.image}
      />

      <View style={styles.buttonContainer}>

        <TouchableOpacity style={styles.button}
        onPress={() => PressPracticeStart()}
        >
          <Text style={styles.buttonText}>학습하기</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
        onPress={() => PressGameStart()}
        >
          <Text style={styles.buttonText}>??모드</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.5,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 150,
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default MainScreen;
