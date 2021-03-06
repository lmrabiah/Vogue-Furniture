import React from "react";
import { observer } from "mobx-react";
// // picturesLogo
import logoL from "../logoL.png";
import logoD from "../logoD.png";
import { FiLogOut } from "react-icons/fi";
//styles
import { NavItem, Logo, ThemeButton, UsernameStyled } from "../styles";
import SignupButton from "./buttons/SignupButton";
import SigninButton from "./buttons/SigninButton";
import authStore from "../stores/authStore";

///
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg" color="green">
      <Logo to="/" className="navbar-brand">
        <img
          src={props.currentTheme === "light" ? logoL : logoD}
          width="500px"
          height="80px"
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

          {authStore.user ? (
            <>
              <UsernameStyled>Hello, {authStore.user.username}</UsernameStyled>
              <FiLogOut
                onClick={authStore.signout}
                size="2em"
                color="#54601A"
              />
            </>
          ) : (
            <>
              <SigninButton />
              <SignupButton />
            </>
          )}
          <ThemeButton onClick={props.changeMode}>
            {props.currentTheme === "light" ? "Dark" : "Light"} mode
          </ThemeButton>
          <a className="nav-item "></a>
        </div>
      </div>
    </nav>
  );
};

export default observer(NavBar);
