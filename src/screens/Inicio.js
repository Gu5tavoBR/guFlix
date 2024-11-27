import React from "react";
import { Tela, BuscaContainer, Input, Buscar } from "./StylesInicio";
import Header from "../components/Header";
import { Feather } from "@expo/vector-icons"

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
    </Tela>
  );
}
