import { useState } from "react";

//styles
import { UpdateButtonStyled } from "../../styles";

//component
import ProductModel from "../models/ProductModel";

const UpdateButton = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <ProductModel
        oldProduct={product}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </>
  );
};
export default UpdateButton;
