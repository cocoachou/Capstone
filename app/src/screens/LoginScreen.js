import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Input from '../components/Input';

const LoginScreen = () => {
  const navigation = useNavigation();

  const PressLogin = () => {
    navigation.navigate('StageScreen');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/back.jpg')}
        style={styles.image}
      >
        <View style={styles.inputContainer}>
          <Input title={'ID'} placeholder={'drawing@email.com'} />
          <Input title={'PASSWORD'} placeholder={'* * * * * *'} />
          <TouchableOpacity onPress={PressLogin} style={styles.Button}>
            <Text style={styles.ButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
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
    width: 400,
    height: 850,
    opacity: 0.5,
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  Button: {
    width: '50%',
    padding: 10,
    backgroundColor: '#000000',
    margin: 10,
    borderRadius: 10,
  },
  ButtonText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});

export default LoginScreen;
