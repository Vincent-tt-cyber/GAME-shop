import React, { useState } from "react";
import styles from "./CartBlock.module.css";
import { BsFillCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import CartMenu from "../CartMenu/CartMenu";
const CartBlock = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  return (
    <>
      <div className={styles["cart"]}>
        <BsFillCartFill size={20} />
        Корзина
        <small>{items.length}</small>
      </div>
    </>
  );
};

export default CartBlock;
