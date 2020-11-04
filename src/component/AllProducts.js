import { TotalPicStyle } from "../styles";
import products from "../products";
import OneItemProduct from "./OneItemProduct";

const AllProducts = () => {
  const productList = products.map((product) => (
    <OneItemProduct productObject={product} />
  ));

  return <TotalPicStyle>{productList}</TotalPicStyle>;
};

export default AllProducts;
