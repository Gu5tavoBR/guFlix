import styled from "styled-components";

export const Container = styled.TouchableOpacity`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 16px;
  width: 140px;
  height: 180px;
`;

export const BannerItem = styled.Image`
  width: 100%;
  height: 170px;
  border-radius: 8px;
`;

export const Titulo = styled.Text`
  font-size: 14px;
  color: #fff;
  padding-top: 8px;
`;

export const AvaliacaoContainer = styled.View`
flex-direction: row;
  align-items: center;
`;

export const Avaliacao = styled.Text`
color: #fff;
padding-left: 4px;
font-size: 12px;
`;