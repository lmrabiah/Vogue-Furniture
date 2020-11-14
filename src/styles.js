import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

// const GlobalStyle = createGlobalStyle`
// body {
// background-color:${(props) => props.theme.backgroundColor}
// }
// `;
const GlobalStyle = createGlobalStyle`
body {
background-color:${({ theme }) => theme.backgroundColor}
}
`;
const Logo = styled(Link)`
  padding: 0.7em;

  img {
    width: 8rem;
  }
`;

const NavItem = styled(NavLink)`
  padding: 0.25em 1em;
  color: Black;

  &.active {
    color: black;
    background-color: grey;
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
  margin-top: 100px;
  width: 550px;
  height: 300px;

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
  object-fit: cover;
`;

const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
const DetailWrapper = styled.div`
  display: block;

  width: 80%;
  color: ${(props) => props.theme.redShade};
  font-family: monospace;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  border-bottom-style: ridge;

  img {
    width: 40%;
    float: center;
  }

  p {
    color: ${(props) => props.theme.mainColor};
    font-family: monospace;
  }
`;

export const DeleteButtonStyled = styled.button`
  border-radius: 3px;
  background-color: ${(props) => props.theme.redShade};
  font-family: monospace;
  justify-content: center;
  align-items: center;
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
  SearchBarStyled,
  DetailWrapper,
  Logo,
  NavItem,
};
