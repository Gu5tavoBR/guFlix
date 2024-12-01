import React from "react";
import { useState, useEffect } from "react";
import {
  Tela,
  BuscaContainer,
  Input,
  Buscar,
  Titulo,
  Banner,
  BannerImg,
  ScrollFilmes,
} from "./Styles";
import Header from "../../components/header/Index";
import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import ScrollItems from "../../components/ScrollItems/Index";
import api, { key } from "../../components/services/api";
import { getList } from "../../utils/Filme";

export default function Inicio() {
  const [emCartaz, setEmCartaz] = useState([]);
  const [popular, setPopular] = useState([]);
  const [maisVotados, setMaisVotados] = useState([]);

  useEffect(() => {
    let estaAtivo = true;

    async function getFilmes() {
const [cartaz, popular, votados] = await Promise.all([
        api.get("/movie/now_playing", {
params: {
          api_key: key,
          language: "pt-BR",
          page: 1,
}
        }),
        api.get("/movie/popular", {
          params: {
                    api_key: key,
                    language: "pt-BR",
                    page: 1,
          }
        }),
        api.get("/movie/top_rated", {
          params: {
                    api_key: key,
                    language: "pt-BR",
                    page: 1,
          }
        })
      ])
      const listCartaz = getList(10, cartaz.data.results);
      const listPopular = getList(5, popular.data.results);
      const listVotados = getList(5, votados.data.results);
      setEmCartaz(listCartaz);
      setPopular(listPopular)
      setMaisVotados(listVotados);
    }
    
    getFilmes();
  }, []);
  
  return (
    <Tela>
      <Header titulo="GuFlix" />

      <BuscaContainer>
        <Input placeholder="Buscar" placeholderTextColor="#ddd" />

        <Buscar>
          <Feather name="search" size={30} color="white" />
        </Buscar>
      </BuscaContainer>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Titulo>Em cartaz</Titulo>

        <Banner activeOpacity={0.6}>
          <BannerImg
            resizeMethod="resize"
            source={{ uri: "https://placecats.com/300/200" }}
          />
        </Banner>
        <ScrollFilmes
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={emCartaz}
          renderItem={({ item }) => <ScrollItems data={item} />}
keyExtractor={( item ) => String(item.id)}
        />

        <Titulo>Populares</Titulo>

        <ScrollFilmes
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={popular}
          renderItem={({ item }) => <ScrollItems data={item} />}
          keyExtractor={( item ) => String(item.id)}
        />

        <Titulo>Mais votados</Titulo>

        <ScrollFilmes
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={maisVotados}
          renderItem={({ item }) => <ScrollItems data={item} />}
          keyExtractor={( item ) => String(item.id)}
        />
      </ScrollView>
    </Tela>
  );
}
