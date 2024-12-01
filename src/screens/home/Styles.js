import styled from "styled-components/native";

export const Tela = styled.View`
  background-color: #141a29;
  flex: 1;
  padding: 35px 0;
`;

export const BuscaContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 50px;
  align-items: center;
  padding: 0 14px;
  margin-bottom: 5px;
`;

export const Input = styled.TextInput`
  background-color: rgba(255, 255, 255, 0.5);
  width: 85%;
  border-radius: 50px;
  padding: 8px 10px;
  font-size: 18;
  color: #fff;
  height: 50px;
`;

export const Buscar = styled.TouchableOpacity`
  width: 15%;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const Titulo = styled.Text`
  padding-top: 15px;
  padding-bottom: 5px;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
padding-left: 14px;
padding-right: 14px;
`;

export const Banner = styled.TouchableOpacity``;

export const BannerImg = styled.Image`
height: 150px;
border-radius: 6px;
margin: 0 10px;
`;

export const ScrollFilmes = styled.FlatList`
height: 250px;
  padding: 0 10px;
`