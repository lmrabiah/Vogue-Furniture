//React
import { Route, Switch } from "react-router";
import { observer } from "mobx-react";
//components
import DetailProduct from "./DetailProduct";
import AllProducts from "./AllProducts";
import DetailStore from "./DetailStore";
import AllStores from "./AllStores";
import Home from "./Home";

//stores
import productStore from "../stores/productStore";
const Routes = () => {
  return (
    <Switch>
      <Route path="/products/:productSlug">
        <DetailProduct />
      </Route>

      <Route path="/products">
        <AllProducts products={productStore.products} />
      </Route>

      <Route path="/stores/:storeSlug">
        <DetailStore />
      </Route>

      <Route path="/stores">
        <AllStores />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default observer(Routes);
