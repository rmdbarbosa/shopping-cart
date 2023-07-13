import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";

export const Shop = () => {
  return (
    <>
      <section className="product container section">
        <div className="product__container">
          {PRODUCTS.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </section>
      <section className="container section"></section>
    </>
  );
};
