import { useContext } from "react";
import React from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <>
      <div className={`product__img-wrapper product__image${id}`}>
        <img src={productImage} />
      </div>
      <div className={`product__project product__content${id}`}>
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <button
          className="btn product__project-btn"
          onClick={() => addToCart(id)}
        >
          Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
        </button>
      </div>
    </>
  );
};
