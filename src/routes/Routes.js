import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Filmes from "../screens/Filmes";
import StackNavigation from "./Stack";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"

const Drawer = createDrawerNavigator();

export default function Routes() {
return (
<Drawer.Navigator
screenOptions={{
headerShown: false,
drawerStyle: {
  backgroundColor: "#090A0E",
paddingTop: 20
},
drawerActiveBackgroundColor: "#E72F49",
drawerActiveTintColor: "#fff",
drawerInactiveTintColor: "#fff"
}}
>
<Drawer.Screen
name="inicioStack"
component={StackNavigation}
options={{
title: "Início",
drawerIcon: ({focused, size, color}) => <Ionicons name={focused ? "home-sharp" : "home-outline"} size={size} color={color} />
}}
 />
<Drawer.Screen
name="filmes"
component={Filmes}
options={{
title: "Meus filmes",
drawerIcon: ({focused, size, color}) => <MaterialCommunityIcons name={focused ? "movie-open" : "movie-outline"} size={size} color={color} />
}}
 />
</Drawer.Navigator>
);
}