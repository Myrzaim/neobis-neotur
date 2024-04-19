import React, { useState } from "react";
import styles from "../Detail/detail.module.scss";
import backimg from "../../assets/images/backgr.jpg";
import location from "../../assets/images/location.png";
import ReviewCard from "../reviewCard/ReviewCard";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import vector from "../../assets/images/Vector.png";
import man from "../../assets/images/man.png";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Link } from "react-router-dom";
const style = {
  bgcolor: "background.paper",
  p: 3,
};

const Detail = () => {
  const [value, setValue] = useState();
  const [valueCom, setValueCom] = useState();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [count, setCount] = useState(5); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

  function increment() {
    //setCount(prevCount => prevCount+=1);
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }

  return (
    <div className={styles.detail}>
      <div className={styles.img}>
        <img src={backimg} alt="backimg" />
      </div>
      <Link to={`/`}>
        {" "}
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
          <h1 className={styles.title}>Mount Fuji</h1>
          <div className={styles.location}>
            <img className={styles.locationImg} src={location} alt="location" />
            <p>Honshu, Japan</p>
          </div>
          <h3>Description</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            odio debitis maxime deserunt placeat, neque tempora eos sapiente
            quod corrupti voluptatum quaerat dicta excepturi aspernatur laborum
            nemo odit non sit?
          </p>
          <h3>Rewiews</h3>
          <ReviewCard />
          <ReviewCard />

          <button className={styles.book_btn} onClick={handleOpen}>
            Book Now
          </button>
          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} className={styles.modal}>
                <div className={styles.info}>
                  <h2>Info</h2>
                  <img src={vector} alt="vector" />
                </div>
                <p>
                  To submit an application for a tour reservation, you need to
                  fill in your information and select the number of people for
                  the reservation
                </p>

                <form>
                  <p>Phone Number</p>
                  <PhoneInput
                    className={styles.input}
                    international
                    countryCallingCodeEditable={false}
                    defaultCountry="KG"
                    value={value}
                    onChange={setValue}
                  />
                  <p>Commentaries to trip</p>
                  <input
                    className={styles.input}
                    placeholder="Write your wishes to trip..."
                    value={valueCom}
                    onChange={setValueCom}
                  />
                  <p>Commentaries to trip</p>
                  <div className={styles.counts}>
                    <button onClick={decrement}>-</button>
                    <h1>{count}</h1>
                    <button onClick={increment}>+</button>
                    <img src={man} alt="man" />
                    <h2>{count} People</h2>
                  </div>
                  <button className={styles.sub_btn}>Submit</button>
                </form>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
