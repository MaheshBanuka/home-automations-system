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
import Splash from './screens/Splash';
import test from './screens/test';
import Lightonoff from './screens/Lightonoff/Lightonoff';
import LightBrightness from './screens/LightBrightness/LightBrightness';
import FanControl from './screens/FanControl/FanControl';
import DoorControl from './screens/DoorControl/DoorControl';
import addFeature from './screens/addFeature/addFeature';
import BrightnessControl from './screens/BrightnessControl/BrightnessControl';
import LightPurchase from './screens/LightPurchase/LightPurchase';
import ResetPassword from './screens/ResetPassword/ResetPassword';
import Dashbord from './screens/Dashbord/Dashbord';
import Seeker from './screens/Seeker';
import cart from './screens/cart/cart';
import adminAddService from './screens/adminAddService/adminAddService';
import adminService from './screens/adminService/adminService';
import adminServiceUpdate from './screens/adminServiceUpdate/adminServiceUpdate';
import adminUserManagement from './screens/adminUserManagement/adminUserManagement';
import adminWelcome from './screens/adminWelcome/adminWelcome';
import getStarted from './screens/getStarted/getStarted';
import MyServices from './screens/MyServices/MyServices';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'login'}>
        <Stack.Screen
          name="LightPurchase"
          component={LightPurchase}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MyServices"
          component={MyServices}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LightBrightness"
          component={LightBrightness}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FanControl"
          component={FanControl}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        /> */}
        <Stack.Screen
          name="DoorControl"
          component={DoorControl}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="test"
          component={test}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="getStarted"
          component={getStarted}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="adminWelcome"
          component={adminWelcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="adminUserManagement"
          component={adminUserManagement}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="adminServiceUpdate"
          component={adminServiceUpdate}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="adminService"
          component={adminService}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="adminAddService"
          component={adminAddService}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="cart"
          component={cart}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Lightonoff"
          component={Lightonoff}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BrightnessControl"
          component={BrightnessControl}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="addFeature"
          component={addFeature}
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
