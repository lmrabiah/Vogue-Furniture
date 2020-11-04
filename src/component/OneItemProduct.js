import {
  ItemImg,
  TextUnderImgTheName,
  TextUnderImgTheShopName,
  TextUnderImgThePrice,
} from "../styles";
const OneItemProduct = (props) => {
  return (
    <div>
      <ItemImg src={props.productObject.img} alt={props.productObject.name} />
      <TextUnderImgTheName>{props.productObject.name}</TextUnderImgTheName>
      <TextUnderImgTheShopName>
        {props.productObject.shop}
      </TextUnderImgTheShopName>
      <TextUnderImgThePrice>{props.productObject.price}</TextUnderImgThePrice>
    </div>
  );
};

export default OneItemProduct;
