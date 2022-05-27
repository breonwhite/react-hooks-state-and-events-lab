import React, { useState } from "react";

function Item({ name, category }) {
  const [itemInCart, updateCart] = useState(false);

  function addItemToCart(){
    updateCart((itemInCart) => !itemInCart);
  }
  
  return (
    <li className={itemInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={itemInCart ? "remove" : "add"}
        onClick={addItemToCart}>
        {itemInCart ? "Remove Item From" : "Add Item to"} Cart
      </button>
    </li>
  );
}

export default Item;
