import React from "react";

//styles
import { DeleteButtonStyled } from "../../styles";

//store
import productStore from "../../stores/productStore";

const DeleteButton = ({ productId }) => {
  return (
    <div>
      <DeleteButtonStyled onClick={() => productStore.deleteProduct(productId)}>
        delete
      </DeleteButtonStyled>
    </div>
  );
};

export default DeleteButton;
