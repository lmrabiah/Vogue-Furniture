import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";

//styles

import { PlusRub } from "../../styles";

//component
import ProductModel from "../models/ProductModel";

const PlusProductBtn = ({ store }) => {
  //+++
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <PlusRub>
      <BsPlusCircle className="float-right" size="2em" onClick={openModal} />
      <ProductModel isOpen={isOpen} closeModal={closeModal} store={store} />
    </PlusRub>
  );
};
export default PlusProductBtn;
