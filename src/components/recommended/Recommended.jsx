import React from "react";
import RecommendedCard from "../recommendedCard/RecommendedCard";
import "./recommended.css";

const Recommended = () => {
  return (
    <div className="recommended">
      <p className="recommended__title">Recommended</p>
      <div className="recommended__card">
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
      </div>
    </div>
  );
};

export default Recommended;
