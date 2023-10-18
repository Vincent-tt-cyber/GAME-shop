import React from "react";
import styles from "./CartMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { IoCloseCircleSharp } from "react-icons/io5";
import { removeItem } from "../../store/slices/cartSlice";

const CartMenu = ({ isOpenCartMenu, setIsOpenCartMenu }) => {
  const cartItems = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles["cart-menu"]}>
        <div className={styles["cart-menu__window"]}>
          <button
            className={styles["cart-menu__close"]}
            onClick={() => setIsOpenCartMenu(!isOpenCartMenu)}
          >
            <IoCloseCircleSharp size={35} color="red" />
          </button>
          <div>
            <h1 className={styles["cart-menu__title"]}>Корзина</h1>
            <div className={styles["cart-menu__layout"]}>
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div className={styles["cart-menu__item"]} key={item.id}>
                    <button
                      className={styles["cart-menu__remove-item"]}
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      <IoCloseCircleSharp size={25} color="#ccc" />
                    </button>
                    <img src={item.image} alt={item.title} />
                    <div>
                      <h3>{item.title}</h3>
                    </div>
                    <div>
                      <small>{item.price.toLocaleString("ru-RU")} ₽</small>
                    </div>
                  </div>
                ))
              ) : (
                <h3>Корзина пуста</h3>
              )}
            </div>
            <p className={styles["cart-menu__total"]}>
              Всего: <span>{totalPrice.toLocaleString("ru-RU")} ₽</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartMenu;
