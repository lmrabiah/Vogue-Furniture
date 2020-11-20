import { Component, useState } from "react";
import { Route, Switch } from "react-router";

//components
import Home from "./component/Home";
import DetailProduct from "./component/DetailProduct";
import AllProducts from "./component/AllProducts";
import NavBar from "./component/NavBar";

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
    mainColor: "pink",
    backgroundColor: "black",
    redShade: "pink",
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

      <Switch>
        <Route path="/products/:productSlug">
          <DetailProduct />
        </Route>

        <Route path="/products">
          <AllProducts />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
