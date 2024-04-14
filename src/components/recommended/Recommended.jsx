import React from "react";
import RecommendedCard from "../recommendedCard/RecommendedCard";
import styles from './recommended.module.scss';

const Recommended = () => {
  return (
    <div className={styles.recommended}>
          <p className={styles.recommended__title}>Recommended</p>
      <div className={styles.recommended__list}>
      {[...Array(10)].map((_,i)=>(
          <RecommendedCard key={i}/>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
