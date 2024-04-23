import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import vector from "../../assets/images/Vector.png";
import man from "../../assets/images/man.png";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import styles from "../modal/modalPage.module.scss";

const style = {
  bgcolor: "background.paper",
  p: 3,
};
const ModalPage = ({ open, handleClose }) => {
  const [value, setValue] = useState();
  const [valueCom, setValueCom] = useState();
  const [peopleCount, setPeopleCount] = useState(1);
  const handleBtnLeft = () =>
    peopleCount > 1 && setPeopleCount(peopleCount - 1);
  const handleBtnRight = () =>
    peopleCount < 6 && setPeopleCount(peopleCount + 1);

  return (
    <div>
      <Modal
        open={open}
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
            <button className={styles.sub_btn}>Submit</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalPage;
