import React, { useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
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
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";

const API = "https://neotour.up.railway.app/api/products/";
const categories = ["Popular", "Featured", "Most Visited", "Europe", "Asia"];
const Discover = () => {
  const [value, setValue] = useState(categories[0]);
  const [getTours, setGetTours] = useState([]);
  useEffect(() => {
    render("popular");
  }, []);
  function render(val) {
    let api = "popular";
    val = val.toLowerCase();
    if (val === "mostvisited") {
      api = "mostVisited";
    } else if (val === "featured") {
      api = val;
    } else if (val === "europa") {
      api = val;
    } else if (val === "asia") {
      api = val;
    }
    axios.get(API + api).then((data) => {
      setGetTours(data.data);
    });
  }
  const handleChange = (event, newValue) => {
    render(newValue);
    setValue(newValue);
  };
  const swiperRef = useRef(null);
  const onSwiper = (swiper) => {
    swiperRef.current = swiper;
  };
  const handlePrevBtn = () => swiperRef.current.slidePrev();
  const handleNextBtn = () => swiperRef.current.slideNext();
  return (
    <div id="discover" className={styles.discover}>
      <div className={styles.discover__head}>
        <p>Discover</p>
        <div className={styles.arrows}>
          <img
            className={styles.arrows__left}
            src={left}
            alt="left"
            onClick={handlePrevBtn}
          />
          <img src={right} alt="right" onClick={handleNextBtn} />
        </div>
      </div>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              {categories.map((category) => (
                <Tab key={category} label={category} value={category} />
              ))}
            </TabList>
          </Box>
          <TabPanel value={value}>
            <Swiper spaceBetween={16} slidesPerView={3} onSwiper={onSwiper}>
              {getTours
                ? getTours.map((item) => (
                    <SwiperSlide>
                      <DiscoverCard key={item.id} item={item} />
                    </SwiperSlide>
                  ))
                : null}
            </Swiper>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};
export default Discover;
