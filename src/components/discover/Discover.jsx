import React from "react";
import styles from "../discover/discover.module.scss";
import left from "../../assets/images/arrows-left.svg";
import right from "../../assets/images/arrows-right.svg";
import DiscoverCard from "../discoverCard/DiscoverCard";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const categories = ["Popular", "Featured", "Most Visited", "Europe", "Asia"];

const Discover = () => {
  const [value, setValue] = useState("Popular");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.discover}>
      <div className={styles.discover__head}>
        <p>Discover</p>
        <div className={styles.arrows}>
          <img className={styles.arrows__left} src={left} alt="left" />
          <img src={right} alt="right" />
        </div>
      </div>
      <div className={styles.discover__category}>
        <Tabs onChange={handleChange} aria-label="lab API tabs example">
          {categories.map((item) => {
            return (
              <>
                <Tab label={item} value={item} className={styles.category} />
              </>
            );
          })}
          {/* <Tab value={value}>
            value
            <div className={styles.discover__card}>
              <DiscoverCard />
              <DiscoverCard />
              <DiscoverCard />
            </div>
          </Tab> */}
        </Tabs>
      </div>
    </div>
  );
};

export default Discover;
