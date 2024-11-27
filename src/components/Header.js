import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Header, Menu, Titulo } from "./styleHeader";
import { Feather } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";

export default function header({titulo}) {
const navigation = useNavigation();
return (
<Header>
<Menu onPress={() => navigation.openDrawer()}>
<Feather name="menu" size={36} color="#fff" />
</Menu>
<Titulo>
    {titulo}
</Titulo>
</Header>
)
}