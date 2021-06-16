import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import RootNavigator from './navigator/rootNavigator';

import login from './screens/LogIn/login';
import Signup from './screens/Signup/Signup';
import Trip from './screens/Trip';
import LightPurchase from './screens/LightPurchase/LightPurchase';
import ResetPassword from './screens/ResetPassword/ResetPassword';
import Dashbord from './screens/Dashbord/Dashbord';
import Seeker from './screens/Seeker';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'LightPurchase'}>
        <Stack.Screen
          name="LightPurchase"
          component={LightPurchase}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="login"
          component={login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Dashbord"
          component={Dashbord}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Seeker"
          component={Seeker}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
