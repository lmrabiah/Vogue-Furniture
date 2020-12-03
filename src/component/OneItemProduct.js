import { Link } from "react-router-dom";
//Buttons
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";
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
      <TextUnderImgThePrice>{product.price}</TextUnderImgThePrice>
      <UpdateButton product={product} />
      <DeleteButton productId={product.id} />
    </div>
  );
};

export default OneItemProduct;
