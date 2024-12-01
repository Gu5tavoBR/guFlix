import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Inicio from "../screens/home/Index";

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
screenOptions={{
headerShown: false
}}
>
      <Stack.Screen name="inicio" component={Inicio} />
    </Stack.Navigator>
  );
}