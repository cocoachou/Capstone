import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import StageScreen from '../screens/StageScreen';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
