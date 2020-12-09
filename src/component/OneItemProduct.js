import { Link } from "react-router-dom";
import { observer } from "mobx-react";
//Buttons
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";
//styles
import {
  ItemImg,
  TextUnderImgTheShopName,
  TextUnderImgThePrice,
} from "../styles";

const OneItemProduct = ({ product, store }) => {
  return (
    <div>
      <Link to={`/products/${product.slug}`}>
        <ItemImg src={product.img} alt={product.name} />
      </Link>

      <TextUnderImgThePrice>{product.name}</TextUnderImgThePrice>
      <TextUnderImgThePrice>Store: {product.shop}</TextUnderImgThePrice>

      <TextUnderImgThePrice>price: {product.price} KD</TextUnderImgThePrice>

      <UpdateButton product={product} />
      <DeleteButton productId={product.id} store={store} />
    </div>
  );
};

export default observer(OneItemProduct);
