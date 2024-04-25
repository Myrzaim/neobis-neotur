import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  bookTour: []
};



export const todoSlice = createSlice({
  name: "addTour",
  initialState,
  reducers: {
    addTour(state, action) {
      state.bookTour.push({
        productId: action.payload.id,
        phoneNumber: action.payload.number,
        amountOfPeople: action.payload.peopleCount,
        comment: action.payload.comment,
      });

    },
  },
});

export const { addTour} = todoSlice.actions;

export default todoSlice.reducer;
