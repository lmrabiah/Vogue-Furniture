import styles from "../styles";

const OneItemProduct = (props) => {
  return (
    <div>
      <img
        style={styles.itemImg}
        src={props.productObject.img}
        alt={props.productObject.name}
      />
      <p style={styles.textUnderImgTheName}>{props.productObject.name}</p>
      <p style={styles.textUnderImgTheShopName}>{props.productObject.shop}</p>
      <p style={styles.textUnderImgThePrice}>{props.productObject.price}</p>
    </div>
  );
};

export default OneItemProduct;
