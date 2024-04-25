import React from "react";
import styles from "./modalPage.module.scss";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
const style = {
  bgcolor: "background.paper",
  p: 3,
};

const ModalBookOk = ({ open }) => {
  return (
    <div>
      <Modal id={2}
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={styles.modal}>
          <h2>Your trip has been booked!</h2>
          <Link to={`/`}>
            <button className={styles.sub_btn}>Ok</button>
          </Link>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalBookOk;
