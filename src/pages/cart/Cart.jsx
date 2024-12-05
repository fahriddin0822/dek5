import React from "react";
import { useCartContext } from "../../context/carts";
import Products from "../../components/products/Products";

const Carts = () => {
  const { cartlist } = useCartContext();

  return (
    <div>
      <h2>Cart</h2>
      {cartlist.length ? (
        <Products data={cartlist} />
      ) : (
        <div>
          <p>Your cart is currently empty. Products you add will appear here.</p>
        </div>
      )}
    </div>
  );
};

export default Carts;
