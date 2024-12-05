import React from "react";
import { useStateValue } from "../../context";
import Products from "../../components/products/Products";

const Wishes = () => {
  const { wishlist } = useStateValue();

  return (
    <div>
      <h2>Wishlist</h2>
      {wishlist.length ? (
        <Products data={wishlist} />
      ) : (
        <div>
          <p>Siz yoqtirgan product lar shu yerda chiqadi</p>
        </div>
      )}
    </div>
  );
};

export default Wishes;
