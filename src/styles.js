import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
background-color:${(props) => props.theme.backgroundColor}
}
`;

const TextUnderImgThePrice = styled.p`
  text-align: center;
  font-family: monospace;
  color: ${(props) => props.theme.mainColor};
  margin-bottom: 70px;
`;

const TextUnderImgTheShopName = styled.p`
  border-bottom-style: ridge;
  text-align: center;
  font-family: monospace;
  border-bottom-color: ${(props) => props.theme.redShade};
  color: ${(props) => props.theme.mainColor};
  padding-bottom: 7px;
`;

const TextUnderImgTheName = styled.p`
  text-align: center;
  font-family: monospace;
  color: ${(props) => props.theme.mainColor};
`;

const TextBeforeTheLineHeader = styled.h2`
  text-align: center;
  font-weight: 100;
  padding-bottom: 10px;
  font-family: monospace;
  border-bottom-style: ridge;
  border-bottom-color: ${(props) => props.theme.redShade};
  color: ${(props) => props.theme.redShade};
`;

const TextHeader = styled.h1`
  font-family: monospace;
  color: ${(props) => props.theme.redShade};
  font-weight: 100;
  font-size: 32px;
  text-align: center;
`;

const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.redShade};
`;

const ImgLogo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  height: 300px;
  border-top-left-radius: 20%;

  border-bottom-right-radius: 20%;

  padding-bottom: 10px;
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
  ThemeButton,
};
