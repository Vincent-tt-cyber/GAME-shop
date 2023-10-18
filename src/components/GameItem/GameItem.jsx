import React from "react";
import styles from "./GameItem.module.css";
import GameBuy from "../GameBuy/GameBuy";

const GameItem = ({ game }) => {
  return (
    <div className={styles["game-item"]}>
      <img
        src={game.image}
        alt={game.title}
        className={styles["game-item__img"]}
      />
      <div className={styles["details"]}>
        <h4 className={styles["game-item__title"]}>{game.title}</h4>
        <div className={styles["genders"]}>
          {game.geners.map((gener) => (
            <span key={gener} className={styles["gener"]}>
              {gener}
            </span>
          ))}
        </div>
      </div>
      <div>
        <GameBuy game={game} />
      </div>
    </div>
  );
};

export default GameItem;
