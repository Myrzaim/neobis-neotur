import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import vector from "../../assets/images/Vector.png";
import man from "../../assets/images/man.png";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import styles from "../modal/modalPage.module.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import ModalBookNo from "./ModalBookNo";
import ModalBookOk from "./ModalBookOk";
import Detail from "../../pages/detailsPage/Detail/Detail";

const style = {
  bgcolor: "background.paper",
  p: 3,
};
const ModalPage = ({ open, handleClose, id }) => {
  const [number, setNumber] = useState();
  const [comment, setComment] = useState("");
  const [peopleCount, setPeopleCount] = useState(1);
  const handleBtnLeft = () =>
    peopleCount > 1 && setPeopleCount(peopleCount - 1);
  const handleBtnRight = () =>
    peopleCount < 6 && setPeopleCount(peopleCount + 1);
  const navigate = useNavigate();

  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const handleDone = () => {
    setDone(true);
  };
  const handleNotDone = () => setNotDone(true);

  const handleBook = (e) => {
    e.preventDefault();
    console.log("here");
    if (!number) {
      setNotDone(true);
    } else {
      let obj = {
        productId: id,
        phoneNumber: number,
        amountOfPeople: peopleCount,
        comment: comment,
      };

      bookTour(obj);
      setNumber("");
      setComment("");
      setPeopleCount();
    }
  };

  async function bookTour(tour) {
    try {
      let res = await axios.post(
        "https://neotour.up.railway.app/api/bookings",
        tour
      );
      console.log(res);
    } catch (error) {
      console.log(error);
      setNotDone(true);
      return;
    }
    setDone(true);
  }

  const handleChangeInput = (e) => {
    setComment(e.target.value);
  };
  return (
    <div>
      <Modal
        open={open && done === false && notDone === false}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={styles.modal}>
          <div className={styles.info}>
            <h2>Info</h2>
            <img src={vector} onClick={handleClose} alt="vector" />
          </div>
          <p>
            To submit an application for a tour reservation, you need to fill in
            your information and select the number of people for the reservation
          </p>
          <form onSubmit={handleBook}>
            <p>Phone Number</p>
            <PhoneInput
              required
              className={styles.input}
              international
              countryCallingCodeEditable={false}
              defaultCountry="KG"
              value={number}
              onChange={setNumber}
            />
            <p>Commentaries to trip</p>
            <input
              type="text"
              className={styles.input}
              placeholder="Write your wishes to trip..."
              value={comment}
              onChange={handleChangeInput}
            />
            <p>Commentaries to trip</p>
            <div className={styles.counts}>
              <button
                type="button"
                disabled={peopleCount === 1}
                onClick={handleBtnLeft}
              >
                -
              </button>
              <h1>{peopleCount}</h1>
              <button
                type="button"
                disabled={peopleCount === 6}
                onClick={handleBtnRight}
              >
                +
              </button>
              <img src={man} alt="man" />
              <h2>{peopleCount} People</h2>
            </div>
            <button type="submit" className={styles.sub_btn}>
              Submit
            </button>
          </form>
        </Box>
      </Modal>

      <ModalBookOk open={done} />
      <ModalBookNo open={notDone} />
    </div>
  );
};
export default ModalPage;
