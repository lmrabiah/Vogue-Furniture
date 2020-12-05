import { observer } from "mobx-react";
import { useState } from "react";

//style
import { TotalPicStyle } from "../styles";
// store
import productStore from "../stores/productStore";
//component
import OneItemProduct from "./OneItemProduct";
import SearchBar from "./SearchBar";
import PlusProductBtn from "./buttons/PlusProductBtn";

const AllProducts = ({ products, store }) => {
  const [query, setQuery] = useState("");

  const filtterProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  const productList = filtterProducts.map((product) => (
    <OneItemProduct product={product} key={product.id} store={store} />
  ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <TotalPicStyle>{productList}</TotalPicStyle>
    </>
  );
};

export default observer(AllProducts);
