import React from "react";
import styles from "../reviewCard/reviewCard.module.scss";

const reviewCard = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img src={item.reviewersImagePath}  alt="persomImg" />
        <p>{item.reviewer}</p>
      </div>
      <p>{item.comment}</p>
    </div>
  );
};

export default reviewCard;
