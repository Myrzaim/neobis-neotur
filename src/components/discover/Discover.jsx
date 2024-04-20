import React from "react";
import styles from "../discover/discover.module.scss";
import left from "../../assets/images/arrows-left.svg";
import right from "../../assets/images/arrows-right.svg";
import DiscoverCard from "../discoverCard/DiscoverCard";
import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

// const categories = ["Popular", "Featured", "Most Visited", "Europe", "Asia"];

const Discover = () => {
  const [value, setValue] = useState("1");

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
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Popular" value="1" />
                <Tab label="Featured" value="2" />
                <Tab label="Most Visited" value="3" />
                <Tab label="Europe" value="4" />
                <Tab label="Asia" value="5" />
              </TabList>
            </Box>
            <TabPanel value="1" className={styles.discover__card}>
              <DiscoverCard />
              <DiscoverCard />
              <DiscoverCard />
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
            <TabPanel value="4">Item Three</TabPanel>
            <TabPanel value="5">Item Three</TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
};

export default Discover;
