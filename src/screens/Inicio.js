import React from "react";
import { Tela, BuscaContainer, Input, Buscar, Titulo, Banner, BannerImg } from "./StylesInicio";
import Header from "../components/Header";
import { Feather } from "@expo/vector-icons"
import { ScrollView, Image } from "react-native";

export default function Inicio() {
  return (
    <Tela>

      <Header titulo="GuFlix" />

<BuscaContainer>
<Input
placeholder="Buscar"
placeholderTextColor="#ddd"
/>
<Buscar>
<Feather name="search" size={30} color="white" />
</Buscar>
</BuscaContainer>

<ScrollView>
<Titulo>Em cartaz</Titulo>

<Banner>
<Image
source={{url: "https://images.app.goo.gl/GmZmG4e3xNFvCz7w5"}}
/>
</Banner>
</ScrollView>
    </Tela>
  );
}
