import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsIncart] = useState(false);

  function handleClick() {
    setIsIncart((prev) => !prev);
  }

  const liClass = isInCart ? "in-cart" : "";
  const buttonText = isInCart ? "Remove from cart" : "Add to cart";

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>
        Add to Cart
      </button>
    </li>
  );
}

export default Item;