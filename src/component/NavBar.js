import React from "react";

// // picturesLogo
import lightLogo from "../lightModeLogoPic.png";
import darkLogo from "../darkModeLogoPic.png";

//styles
import { NavItem, Logo, ThemeButton } from "../styles";
import SignupButton from "./buttons/SignupButton";

///

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <SignupButton />
      <Logo to="/" className="navbar-brand">
        <img
          src={props.currentTheme === "light" ? lightLogo : darkLogo}
          width="100"
        />
      </Logo>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <NavItem
            to="/products"
            style={{
              margin: 10,
              float: "right",
              marginTop: 25,
              color: props.currentTheme === "light" ? "black" : "white",
            }}
          >
            Products
          </NavItem>
          <NavItem
            to="/stores"
            style={{
              margin: 10,
              float: "right",
              marginTop: 25,
              color: props.currentTheme === "light" ? "black" : "white",
            }}
          >
            Stores
          </NavItem>
          <ThemeButton onClick={props.changeMode}>
            {props.currentTheme === "light" ? "Dark" : "Light"} mode
          </ThemeButton>
          <a className="nav-item "></a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
