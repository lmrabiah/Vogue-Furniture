//React
import { Component, useState } from "react";
import { observer } from "mobx-react";

//components
import Routes from "./component/Routes";
import NavBar from "./component/NavBar";
import FullLoadingScreen from "./component/FullLoadingScreen";
//Stores
import storeStore from "./stores/storeStore";
import productStore from "./stores/productStore";
//style
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

const theme = {
  light: {
    mainColor: "#8b4513",
    backgroundColor: "rgba(204, 192, 183, 0.04)",
    redShade: "#bc5a45",
    red: "#ff3232",
  },
  dark: {
    mainColor: "white",
    backgroundColor: "black",
    redShade: "white",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrenttheme] = useState("light");

  ///to add product from model whe have to writr it in app.js

  //end

  const changeMode = () =>
    setCurrenttheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} changeMode={changeMode} />
      {productStore.loading || storeStore.loading ? (
        <FullLoadingScreen />
      ) : (
        <Routes />
      )}
      ;
    </ThemeProvider>
  );
}

export default observer(App);
