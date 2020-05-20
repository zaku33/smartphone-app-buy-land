import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
// import ForgotPassword from './pages/ForgotPassword';


export default function Routes() {
  return (
    <NavigationContainer> 
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="SignIn" component={SignIn} />
      <AppStack.Screen name="SignUp" component={SignUp} />
      <AppStack.Screen name="Projects" component={Projects} />
      <AppStack.Screen name="Tasks" component={Tasks} />
      <AppStack.Screen name="Incidents" component={Incidents} />
      <AppStack.Screen name="Detail" component={Detail} />
      
      
      {/* <AppStack.Screen name="ForgotPassword" component={ForgotPassword} /> */}

      </AppStack.Navigator>
    </NavigationContainer>
  );
}