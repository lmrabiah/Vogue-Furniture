import React from "react";

//styles
import { DeleteButtonStyled } from "../../styles";

//store
import productStore from "../../stores/productStore";

const DeleteButton = ({ productId, store }) => {
  return (
    <div>
      <DeleteButtonStyled
        onClick={() => productStore.deleteProduct(productId, store)}
      >
        delete
      </DeleteButtonStyled>
    </div>
  );
};

export default DeleteButton;
