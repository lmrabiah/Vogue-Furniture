import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
color:black
}
`;

const TextUnderImgThePrice = styled.p`
  text-align: center;
  font-family: monospace;
  color: #8b4513;
  margin-bottom: 70px;
`;

const TextUnderImgTheShopName = styled.p`
  border-bottom-style: ridge;
  text-align: center;
  font-family: monospace;
  color: #8b4513;
  padding-bottom: 5px;
`;

const TextUnderImgTheName = styled.p`
  text-align: center;
  font-family: monospace;
  color: #8b4513;
`;

const TextBeforeTheLineHeader = styled.h2`
  text-align: center;
  font-weight: 100;
  padding-bottom: 10px;
  font-family: monospace;
  border-bottom-style: ridge;
  border-bottom-color: #8b4513;
  color: #bc5a45;
`;

const TextHeader = styled.h1`
  font-family: monospace;
  color: #bc5a45;
  font-weight: 100;
  font-size: 32px;
  margin-left: 730px;
`;

const ImgLogo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
`;

const ItemImg = styled.img`
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  margin-left: 20px;
  object-fit: cover;
`;

const TotalPicStyle = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export {
  GlobalStyle,
  TextHeader,
  TextBeforeTheLineHeader,
  ItemImg,
  TotalPicStyle,
  ImgLogo,
  TextUnderImgTheName,
  TextUnderImgTheShopName,
  TextUnderImgThePrice,
};
