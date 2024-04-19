import React from "react";
import { Link } from "react-router-dom";
import RecommendedCard from "../recommendedCard/RecommendedCard";
import styles from "./recommended.module.scss";

const Recommended = () => {
  return (
    <div className={styles.recommended}>
      <p className={styles.recommended__title}>Recommended</p>
      <div className={styles.recommended__list}>
        {[...Array(10)].map((_, i) => (
          <Link to={`/detail`}>
            <RecommendedCard key={i} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
