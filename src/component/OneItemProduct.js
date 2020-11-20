import { Link } from "react-router-dom";
//components
import DeleteButton from "./buttons/DeleteButton";
//styles
import {
  ItemImg,
  TextUnderImgTheName,
  TextUnderImgTheShopName,
  TextUnderImgThePrice,
} from "../styles";

const OneItemProduct = ({ product }) => {
  return (
    <div>
      <Link to={`/products/${product.slug}`}>
        <ItemImg src={product.img} alt={product.name} />
      </Link>

      <TextUnderImgTheName>{product.name}</TextUnderImgTheName>
      <TextUnderImgTheShopName>{product.shop}</TextUnderImgTheShopName>
      <TextUnderImgThePrice>{product.price}</TextUnderImgThePrice>
      <DeleteButton productId={product.id} />
    </div>
  );
};

export default OneItemProduct;
