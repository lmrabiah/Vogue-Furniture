import React from "react";
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = (props) => {
  const productId = props.productId;
  const handleDelete = () => {
    props.deleteProduct(productId);
  };
  return (
    <div>
      <DeleteButtonStyled onClick={handleDelete}>delete</DeleteButtonStyled>
    </div>
  );
};

export default DeleteButton;
