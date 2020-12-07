import React from "react";
import { AuthButtonStyled } from "../../styles";
import { useState } from "react";
import Signup from "../models/Signup";
const SignupButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <AuthButtonStyled onClick={openModal}>Sign up</AuthButtonStyled>
      <Signup isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default SignupButton;
