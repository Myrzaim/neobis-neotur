import React from "react";
import styles from "../reviewCard/reviewCard.module.scss";
import img from "../../assets/images/personImg.jpg";

const reviewCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img src={img} alt="persomImg" />
        <p>Anymous</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odio at
        voluptatibus impedit nemo incidunt quisquam nesciunt id nostrum aliquam!
        Possimus atque magnam, maiores labore deleniti illo accusamus
        consequatur? Libero?
      </p>
    </div>
  );
};

export default reviewCard;
