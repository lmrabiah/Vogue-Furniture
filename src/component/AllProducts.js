import { TotalPicStyle } from "../styles";

import OneItemProduct from "./OneItemProduct";
import { useState } from "react";
import SearchBar from "./SearchBar";

const AllProducts = (props) => {
  const [query, setQuery] = useState("");

  const [_products, setProduct] = useState(props.products);

  const filtterProducts = _products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
  console.log(filtterProducts);
  const productList = filtterProducts.map((product) => (
    <OneItemProduct
      product={product}
      setProduct={props.setProduct}
      key={product.id}
      deleteProduct={props.deleteProduct}
    />
  ));
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <TotalPicStyle>{productList}</TotalPicStyle>;
    </>
  );
};

export default AllProducts;
