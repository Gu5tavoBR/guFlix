import styled from "styled-components/native";

export const Tela = styled.View`
  background-color: #141a29;
  flex: 1;
  padding: 4px 0;
`;

export const BuscaContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 50px;
  align-items: center;
  padding: 0 14px;
  margin-bottom: 8px;
`;

export const Input = styled.TextInput`
  background-color: rgba(255, 255, 255, 0.5);
  width: 85%;
  border-radius: 50px;
  padding: 8px 15px;
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
  padding-top: 20px;
  padding-bottom: 8px;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
padding-left: 14px;
padding-right: 14px;
`;

export const Banner = styled.TouchableOpacity`
height: 1000px;
`;

export const BannerImg = styled.Image`
height: 150px;
border-radius: 6px;
`;
