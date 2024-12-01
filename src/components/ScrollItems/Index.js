import React from "react";
import { Container, BannerItem, Titulo, AvaliacaoContainer, Avaliacao } from "./styles";
import { Ionicons } from "@expo/vector-icons"

export default function ScrollItems({data}) {
return (
<Container activeOpacity={0.7}>
<BannerItem
source={{ uri: `https://image.tmdb.org/t/p/original/${data.poster_path}` }}
/>
<Titulo numberOfLines={1}>{data.title}</Titulo>
<AvaliacaoContainer>
<Ionicons name="star" size={12} color="#E7A74e" />
<Avaliacao>{data.vote_average}/10</Avaliacao>
</AvaliacaoContainer>
</Container>
)
}