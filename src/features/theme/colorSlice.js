import { createSlice } from '@reduxjs/toolkit';

export const colorSlice = createSlice({
  name: 'color',
  initialState: 'pink',
  reducers: {
    changeColor: (state, action) => {
      // state = action.payload; -> can't do this since the state is a primitive
      return action.payload;
    },
  },
});

export const { changeColor } = colorSlice.actions;

export default colorSlice.reducer;
