import React from "react";
import styles from "./styles.module.scss";
import mountain from "../../assets/images/mountain.jpg";

const RecommendedCard = ({ item }) => {
  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={item.imagePath} alt="mountain" />
      <p className={styles.card__title}>{item.name}</p>
    </div>
  );
};

export default RecommendedCard;
