import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import StageScreen from '../screens/StageScreen';
import MainDrawing from '../screens/MainDrawing';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="StageScreen"
          component={StageScreen}
          options={{
            title: '',
            headerShown: true,
          }}
        />
        <Stack.Screen name="MainDrawing" component={MainDrawing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
