//React
import { Route, Switch } from "react-router";

//components
import DetailProduct from "./DetailProduct";
import AllProducts from "./AllProducts";
import DetailStore from "./DetailStore";
import AllStores from "./AllStores";
import Home from "./Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/products/:productSlug">
        <DetailProduct />
      </Route>

      <Route path="/products">
        <AllProducts />
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

export default Routes;
