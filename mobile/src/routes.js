import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import MainScreen from "./pages/MainScreen";
import CreateNews from "./views/components/News/CreateNews";
import UpdateNews from "./views/components/News/UpdateNews";
import DetailNews from "./views/components/News/DetailNews";


export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="CreateNews" component={CreateNews} />
        <Stack.Screen name="UpdateNews" component={UpdateNews} />
        <Stack.Screen name="DetailNews" component={DetailNews} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
