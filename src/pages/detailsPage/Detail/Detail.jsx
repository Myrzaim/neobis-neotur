import React, { useEffect, useState } from "react";
import styles from "./detail.module.scss";
import location from "../../../assets/images/location.png";
import ReviewCard from "../../../components/reviewCard/ReviewCard";
import ModalPage from "../../../components/modal/ModalPage";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import ModalBookOk from "../../../components/modal/ModalBookOk";
import ModalBookNo from "../../../components/modal/ModalBookNo";

const API = "https://neotour.up.railway.app/api/products/";
const Detail = () => {
  const [getTour, setGetTour] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { id } = useParams();

  useEffect(() => {
    axios.get(API + id).then((data) => setGetTour(data.data));
  }, []);

  return (
    <div className={styles.detail}>
      <div className={styles.img}>
        <img src={getTour.imagePath} alt="backimg" />
      </div>
      <Link to={`/`}>
        <button className={styles.back__btn}>
          <svg
            width="49"
            height="16"
            viewBox="0 0 49 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.292892 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM49 9H1V7H49V9Z"
              fill="white"
            />
          </svg>
          Go back
        </button>
      </Link>
      <div className={styles.description}>
        <div className={styles.description__container}>
          <h1 className={styles.title}>{getTour.name}</h1>
          <div className={styles.location}>
            <img className={styles.locationImg} src={location} alt="location" />
            <p>{getTour.location}</p>
          </div>
          <h3>Description</h3>
          <p>{getTour.description}</p>
          <h3>Rewiews</h3>

          {getTour.reviews
            ? getTour.reviews.map((item) => (
                <ReviewCard key={item.id} item={item} />
              ))
            : null}
          <button className={styles.book_btn} onClick={handleOpen}>
            Book Now
          </button>
          <div>
            <ModalPage id={getTour.id} handleClose={handleClose} open={open} />
            {/* <ModalBookOk open={open} /> */}
            {/* <ModalBookNo open={open} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
