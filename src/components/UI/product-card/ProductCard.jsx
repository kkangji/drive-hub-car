import React from "react";
import "../../../styles/product-card.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { formatPrice } from "../../../helper/format";
import noImage from "../../../assets/svg/no_image.svg";

const ProductCard = (props) => {
  const { title, photo, price } = props?.item?.fields;

  const dispatch = useDispatch();
  const id = props?.id;
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        photo,
        price,
      })
    );
  };

  return (
    <>
      <div className="product__item d-flex flex-column justify-content-between">
        <div className="product__content">
          <img
            className="product__img"
            src={photo}
            alt="car"
            onError={(e) => (e.target.src = noImage)}
          />
        </div>
        <div className="d-flex m-3 flex-column justify-content-between">
          <div className="product__title mb-2">{title}</div>
          <div className="product__price mb-2">{formatPrice(price)}</div>
          <button className="addTOCART__btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      {/* <div class="card">
        <img class="card-img-top" src={photo} alt="car" />
        <div class="card-body">
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div> */}
    </>
  );
};

export default ProductCard;
