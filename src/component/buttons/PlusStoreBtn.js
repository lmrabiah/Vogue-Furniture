import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";

//styles

import { PlusRub } from "../../styles";

//component
import StoreModel from "../models/StoreModel";

const PlusStoreBtn = ({}) => {
  //+++
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <PlusRub>
      <BsPlusCircle className="float-right" size="2em" onClick={openModal} />
      <StoreModel isOpen={isOpen} closeModal={closeModal} />
    </PlusRub>
  );
};
export default PlusStoreBtn;
