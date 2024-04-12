import React from "react";
import "./recommendedCard.css";
import mountain from "../../images/mountain.jpg";

const RecommendedCard = () => {
  return (
    <div className="recommendedCard" id="foo">
      <img className="recommendedCard__img" src={mountain} alt="mountain" />
      <p className="recommendedCard__title">Nouthern Mountain</p>
    </div>
  );
};

export default RecommendedCard;
