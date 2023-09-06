import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "reactstrap";
import logo from "../../assets/svg/logo.svg";
import ic_cart from "../../assets/svg/shopping_cart.svg";
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";
import "../../styles/header.css";

const Header = () => {
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div
          className="nav__wrapper d-flex align-items-center justify-content-between"
          style={{ height: 80 }}
        >
          <div className="logo" onClick={() => navigate("/home")}>
            <img src={logo} alt="logo" />
          </div>

          <div
            className="nav__right d-flex align-items-center gap-1"
            style={{ height: 80 }}
          >
            <span className="cart__icon" onClick={toggleCart}>
              <img src={ic_cart} width="25" height="25" alt="shopping_cart" />
              {totalQuantity > 0 && <span className="cart__badge" />}
            </span>
            <span className="quantitys">Cart({totalQuantity})</span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
