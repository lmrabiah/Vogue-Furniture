import DeleteButton from "./buttons/DeleteButton";
import { Link } from "react-router-dom";
import AllProducts from "./AllProducts";

import products from "../products";
import {
  ItemImg,
  TextUnderImgTheName,
  TextUnderImgTheShopName,
  TextUnderImgThePrice,
  DeleteButtonStyled,
} from "../styles";

const OneItemProduct = (props) => {
  const product = props.product;

  return (
    <div>
      <Link to={`/products/${product.slug}`}>
        <ItemImg src={product.img} alt={product.name} />
      </Link>

      <TextUnderImgTheName>{product.name}</TextUnderImgTheName>
      <TextUnderImgTheShopName>{product.shop}</TextUnderImgTheShopName>
      <TextUnderImgThePrice>{product.price}</TextUnderImgThePrice>
      <DeleteButton
        productId={product.id}
        deleteProduct={props.deleteProduct}
      />
    </div>
  );
};

export default OneItemProduct;
