import React, { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

import CartBlock from "../CartBlock/CartBlock";
import CartMenu from "../CartMenu/CartMenu";

export const Header = () => {
  const [isOpenCartMenu, setIsOpenCartMenu] = useState(false);
  return (
    <>
      <header className={styles["header"]}>
        <div className={styles["wrapper"]}>
          <Link to="/" className={styles["header__logo"]}>
            Game <span>Store</span>
          </Link>
        </div>
        <div
          onClick={() => setIsOpenCartMenu(!isOpenCartMenu)}
          className={styles["header-cart__btn"]}
        >
          <CartBlock />
        </div>
      </header>
      {isOpenCartMenu && (
        <CartMenu
          isOpenCartMenu={isOpenCartMenu}
          setIsOpenCartMenu={setIsOpenCartMenu}
        />
      )}
    </>
  );
};
