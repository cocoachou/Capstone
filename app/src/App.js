import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import StageScreen from './screens/StageScreen';
import StackNavigator from './navigators/StackNavigator';

const App = () => {
  return (
    <StackNavigator />
    //   <View style={styles.container}>
    //     <StatusBar style="auto" />
    //     {/* <LoginScreen/> */}
    //     {/* <StageScreen /> */}
    //     <StackNavigator />
    //   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
