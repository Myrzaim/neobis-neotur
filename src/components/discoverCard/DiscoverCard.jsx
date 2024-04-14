import React from "react";
import styles from "./discoverCard.module.scss";
import mountain from "../../images/mountain.jpg";

const DiscoverCard = () => {
  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={mountain} alt="mountain" />
      <p className={styles.card__title}>Nouthern Mountain</p>
    </div>
  );
};

export default DiscoverCard;
