import React from "react";
import { ReactDOM } from "react";
import ReactDom from "react-dom";
import { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "var(--clr-slate800)",

  padding: "50px",
  overflowY: "auto",
  maxHeight: "100vh",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

export const Cart = ({ open, onClose }) => {
  if (!open) return null;
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <div
        className={
          totalAmount > 0 ? "cart__container" : "cart__container__empty"
        }
        style={MODAL_STYLES}
      >
        <div className="cartItems">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
        </div>

        {totalAmount > 0 ? (
          <div className="checkout">
            <p> Subtotal: $ {totalAmount}</p>

            <button className="checkout__button" onClick={onClose}>
              Checkout
            </button>
          </div>
        ) : (
          <div className="cart__empty">
            <h1 className="cart__empty__text">Empty cart</h1>
            <img className="cart__empty__img" src="/empty-cart.png" />
          </div>
        )}
      </div>
    </>,
    document.getElementById("portal")
  );
};
