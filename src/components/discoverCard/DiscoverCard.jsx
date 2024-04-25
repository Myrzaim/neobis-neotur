import React from "react";
import { Link } from "react-router-dom";
import styles from "./discoverCard.module.scss";

const DiscoverCard = ({ item }) => {
  return (
    <Link to={`/detail/${item.id}`}>
      <div className={styles.card}>
        <img className={styles.card__img} src={item.imagePath} alt="mountain" />
        <p className={styles.card__title}>{item.name}</p>
      </div>
    </Link>
  );
};

export default DiscoverCard;
