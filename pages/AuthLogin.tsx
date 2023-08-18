import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './Login';
import SignUp from './SignUp';
import { AntDesign } from '@expo/vector-icons';
import { AntDesignName } from '../components/AntDesignCardOption';

const Tab = createBottomTabNavigator();

export default function AuthLogin() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: AntDesignName = 'upcircleo';

          if (route.name === 'Login') {
            iconName = 'login'
          }
          if (route.name === 'SignUp') {
            iconName === 'upcircleo'
          }
          return <AntDesign name={iconName} size={size} color={color} />
        }
      })}>
        <Tab.Screen name="Login" component={Login}/>
        <Tab.Screen name="SignUp" component={SignUp} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}