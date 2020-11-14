import { Component, useState } from "react";
import products from "./products";
import { Route, Switch } from "react-router";

//components
import Home from "./component/Home";
import DetailProduct from "./component/DetailProduct";
import AllProducts from "./component/AllProducts";

//style
import { GlobalStyle, ThemeButton } from "./styles";
import { ThemeProvider } from "styled-components";
import NavBar from "./component/NavBar";

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
  const [_products, setProducts] = useState(products);

  const deleteProduct = (productId) => {
    const updateProducts = _products.filter(
      (product) => product.id !== productId
    );
    setProducts(updateProducts);
  };

  const changeMode = () =>
    setCurrenttheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} changeMode={changeMode} />

      <Switch>
        <Route path="/products/:productSlug">
          <DetailProduct products={_products} deleteProduct={deleteProduct} />
        </Route>

        <Route path="/products">
          <AllProducts products={_products} deleteProduct={deleteProduct} />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
