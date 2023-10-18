import React from "react";
import styles from "./GameItem.module.css";
import GameBuy from "../GameBuy/GameBuy";
import { Link } from "react-router-dom";

const GameItem = ({ game }) => {
  return (
    <div to={`/game/${game.id}`} className={styles["game-item"]}>
      <Link to={`/game/${game.id}`}>
        <img
          src={game.image}
          alt={game.title}
          className={styles["game-item__img"]}
        />
      </Link>
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
