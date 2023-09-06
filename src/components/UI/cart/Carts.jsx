import React from "react";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../../store/shopping-cart/cartUiSlice";
import { formatPriceTHB } from "../../../helper/format";
import "../../../styles/shopping-cart.css";

const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const discountPrice = 0;
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  return (
    <div className="cart__container" onClick={toggleCart}>
      <ListGroup onClick={(event) => event.stopPropagation()} className="cart">
        <div className="cart__closeButton">
          <span onClick={toggleCart}>
            <i className="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart__item-list">
          {cartProducts.length === 0 ? (
            <h6 className="text-center">No item added to the cart</h6>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} onClose={toggleCart} />
            ))
          )}
        </div>

        <div className="d-flex mb-5 align-items-center justify-content-center">
          <div className="input_style">
            <input className="input_code" placeholder="Discount code" />
          </div>
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>Total</h6>
          <span>{formatPriceTHB(totalAmount)}</span>
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>Discount</h6>
          <span>{formatPriceTHB(discountPrice)}</span>
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>Grand Total</h6>
          <span>{formatPriceTHB(totalAmount - discountPrice)}</span>
        </div>

        <button>
          <Link to="/checkout" onClick={toggleCart}>
            Checkout
          </Link>
        </button>
      </ListGroup>
    </div>
  );
};

export default Carts;
