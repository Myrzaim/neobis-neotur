import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RecommendedCard from "../recommendedCard/RecommendedCard";
import styles from "./recommended.module.scss";

const API = "https://neotour.up.railway.app/api/products/recommended";
const Recommended = () => {
  const [recommend, setRecommend] = useState([]);

  useEffect(() => {
    axios.get(API).then((data) => setRecommend(data.data));
  }, []);
  return (
    <div className={styles.recommended}>
      <p className={styles.recommended__title}>Recommended</p>
      <div className={styles.recommended__list}>
        {recommend.map((item) => (
          <Link to={`/detail`}>
            <RecommendedCard key={item.id} item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
