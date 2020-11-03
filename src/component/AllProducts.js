import styles from "../styles";
import products from "../products";
import OneItemProduct from "./OneItemProduct";

const AllProducts = () => {
  const productList = products.map((product) => (
    <OneItemProduct productObject={product} />
  ));

  return <div style={styles.totalPicStyle}>{productList}</div>;
};

export default AllProducts;
