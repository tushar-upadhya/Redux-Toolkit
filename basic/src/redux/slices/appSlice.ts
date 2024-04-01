import { createSlice } from "@reduxjs/toolkit";

interface appSliceInitialState {
  count: number;
  number: number;
}

const initialState: appSliceInitialState = {
  count: 0,
  number: 1,
};

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    increaseCount: (state) => {
      // state.count++;
      state.count += Number(state.number);
    },
    decreaseCount: (state) => {
      // state.count--;
      state.count -= Number(state.number);
    },
    updateNumber: (state, action) => {
      state.number = action.payload;
    },
  },
});

export const { decreaseCount, increaseCount, updateNumber } = appSlice.actions;

export default appSlice.reducer;
