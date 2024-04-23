import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import StageScreen from '../screens/StageScreen';
import DrawingScreen from '../screens/DrawingScreen';
import MainScreen from '../screens/MainScreen';
import PracticeStageScreen from '../screens/PracticeStageScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen
          name="StageScreen"
          component={StageScreen}
          options={{
            title: '',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="PracticeStageScreen"
          component={PracticeStageScreen}
          options={{
            title: '',
            headerShown: true,
          }}
        />
        <Stack.Screen name="DrawingScreen" component={DrawingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
