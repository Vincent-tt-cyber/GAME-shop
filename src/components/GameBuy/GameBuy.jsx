import React from "react";
import styles from "./GameBuy.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../store/slices/cartSlice";

const GameBuy = ({ game }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === game.id);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) { 
      // console.log(isItemInCart);
      dispatch(removeItem(game.id));
    } else {
      dispatch(addItem(game));
    }
  };
  return (
    <>
      <div className={styles["game-buy"]}>
        <span className={styles["game-buy__price"]}>
          {game.price.toLocaleString("ru-RU")} ₽
        </span>
        <button
          className={
            styles[isItemInCart ? "game-buy__btn-active" : "game-buy__btn"]
          }
          onClick={handleClick}
        >
          {isItemInCart ? "Убрать из корзины" : "В корзину"}
        </button>
      </div>
    </>
  );
};

export default GameBuy;
