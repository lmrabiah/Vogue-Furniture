import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
body {
background-color:${({ theme }) => theme.backgroundColor}
}
`;
export const UsernameStyled = styled.p`
  padding: 0.25em 1em;
  margin-top: 24px;
`;
export const CreateButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.redShade};

  &:hover {
    color: black;
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;
export const Logo = styled(Link)`
  padding: 0.7em;

  img {
    width: 8rem;
  }
`;

export const NavItem = styled(NavLink)`
  padding: 0.25em 1em;
  color: Black;

  &.active {
    color: ${(props) => props.theme.mainColor};
    text-decoration-line: underline;
  }
`;

export const TextUnderImgThePrice = styled.p`
  text-align: center;
  /* padding-right: 80px;
  border-bottom-color: red; */
  /* border-bottom-style: ridge; */
  font-family: monospace;
  color: ${(props) => props.theme.mainColor};
  /* margin-bottom: 70px; */
  /* padding-bottom: 10px;
  border-bottom-style: ridge; */
  font-size: 15px;
`;

export const PlusRub = styled.div`
  cursor: pointer;
`;

export const TextUnderImgTheShopName = styled.p`
  border-bottom-style: ridge;
  text-align: center;
  font-family: sans-serif;
  border-bottom-style: ridge;
  border-bottom-color: ${(props) => props.theme.redShade};
  color: ${(props) => props.theme.mainColor};
  padding-bottom: 7px;
`;

export const NameOfStore = styled.p`
  text-align: center;
  font-family: sans-serif;
  color: ${(props) => props.theme.mainColor};
  padding-top: 5px;
  font-size: 20px;
`;

export const TextBeforeTheLineHeader = styled.h2`
  text-align: center;
  font-weight: 100;
  padding-bottom: 10px;
  font-family: "Cinzel", serif;
  border-bottom-style: ridge;
  border-bottom-color: ${(props) => props.theme.redShade};
  color: ${(props) => props.theme.mainColor};
  font-size: 23px;
`;

export const TextHeader = styled.h1`
  font-family: "Sacramento", cursive;
  color: ${(props) => props.theme.redShade};
  font-weight: 400;
  font-size: 43px;
  text-align: center;
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  /* border-radius: 3px; */
  border-bottom-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: #ededed;

  color: black;
  font-family: sans-serif;

  border-color: #54601a;
  &:hover {
    background-color: #9a4332;
    border-color: #54601a;

    color: #f1f1f1;
  }
`;

export const ImgLogo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  width: 900px;
  height: 600px;
  background: #e0e0e0;
  border-color: color;
  padding-right: 150px;
  padding-left: 150px;
`;

export const ItemImg = styled.img`
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  margin-left: 20px;
  object-fit: cover;
  padding-top: 20px;
`;

export const TotalPicStyle = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  object-fit: cover;
  flex-wrap: wrap;
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
export const DetailWrapper = styled.div`
  display: block;

  width: 80%;
  color: ${(props) => props.theme.redShade};
  font-family: sans-serif;
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  img {
    width: 40%;
    float: center;
  }

  p {
    color: ${(props) => props.theme.mainColor};
    font-family: sans-serif;
    font-size: 17px;
  }
  h1: {
    text-align: center;
    font-family: sans-serif;
    color: ${(props) => props.theme.mainColor};
    padding-top: 5px;
    font-size: 20px;
  }
`;

export const DetailWrapperTest = styled.div`
  display: block;

  width: 90%;
  color: ${(props) => props.theme.redShade};
  font-family: sans-serif;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: center;
  display: flex;
  object-fit: cover;
  flex-wrap: wrap;

  img {
    /* margin: 1rem auto;
    width: 300px;
    height: 300%;
    float: center;
    align-items: center;
    justify-content: center;
    display: flex;
    object-fit: cover;
    flex-wrap: wrap;
    align-items: center; */
    justify-content: center;
    display: flex;
    object-fit: cover;
    flex-wrap: wrap;
  }

  p {
    color: ${(props) => props.theme.mainColor};
    font-family: sans-serif;
  }
  button {
    font-size: 0.5em;
    padding: 0.9em;
    background-color: #9a4332;
    font-family: sans-serif;
    color: #f1f1f1;
    border-color: ${(props) => props.theme.mainColor};
    margin-bottom: 5px;
    &:hover {
      background-color: #f1f1f1;
    }
  }
`;

export const DeleteButtonStyled = styled.button`
  font-size: 0.5em;
  padding: 0.9em;
  background-color: #9a4332;
  font-family: sans-serif;
  color: #f0d6d1;
  border-color: ${(props) => props.theme.mainColor};
  &:hover {
    background-color: #f1f1f1;
    border-color: ${(props) => props.theme.mainColor};
    color: black;
  }
`;

export const UpdateButtonStyled = styled.button`
  font-size: 1em;
  margin: 1.25em;
  background-color: #9a4332;
  font-family: sans-serif;
  color: #f1f1f1;
  border-color: ${(props) => props.theme.mainColor};
  margin-bottom: 5px;
  &:hover {
    background-color: #f1f1f1;
    border-color: ${(props) => props.theme.mainColor};
    color: black;
  }
`;

export const AuthButtonStyled = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;

  border-bottom-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: #ededed;

  color: black;
  font-family: sans-serif;

  border-color: #54601a;
  &:hover {
    background-color: #9a4332;
    border-color: #54601a;
    color: #f1f1f1;
  }
`;
