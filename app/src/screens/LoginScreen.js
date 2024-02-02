import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Input from '../components/Input';

const Login = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/back.jpg')}
        style={styles.image}
      >
        <View style={styles.inputContainer}>
          <Input title={'ID'} placeholder={'drawing@email.com'} />
          <Input title={'PASSWORD'} placeholder={'* * * * * *'} />
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
    position: 'absolute',
  },
});

export default Login;
