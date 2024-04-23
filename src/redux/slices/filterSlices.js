import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  value: 0,
  popular: [],
};

const API = "https://neotour.up.railway.app/api/products";
function getPopulars() {
    async () => {
        const response = await axios.get(API + "/popular").then((data) => {
            // console.log(data);
            return response.data;
        });
    }
}

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    getPopular(state) {
          state.popular = getPopulars();
      console.log(state.popular);
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { getPopular, decrement, incrementByAmount } = filterSlice.actions;

export default filterSlice.reducer;
