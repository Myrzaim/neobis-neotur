import React from "react";
import "./discover.css";
import left from "../../images/arrows-left.svg";
import right from "../../images/arrows-right.svg";
import DiscoverCard from "../discoverCard/DiscoverCard";

const Discover = () => {
  return (
    <div className="discover">
      <div className="discover__head">
        <p>Discover</p>
        <div className="arrows">
          <img className="arrows__left" src={left} alt="left" />
          <img src={right} alt="right" />
        </div>
      </div>
      <div className="discover__category">
        <ul className="category">
          <li className="category__item">
            <a href="#"> Popular</a>
          </li>
          <li className="category__item">
            <a href="#"> Featured</a>
          </li>
          <li className="category__item">
            <a href="#"> Most Visited</a>
          </li>
          <li className="category__item">
            <a href="#"> Europe</a>
          </li>
          <li className="category__item">
            <a href="#"> Asia</a>
          </li>
        </ul>
      </div>
      <div className="discover__card">
        <DiscoverCard />
        <DiscoverCard />
        <DiscoverCard />
      </div>
    </div>
  );
};

export default Discover;
