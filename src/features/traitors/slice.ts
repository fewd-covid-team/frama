/* eslint no-param-reassign: 0 */
import { createSlice } from '@reduxjs/toolkit';

export const countrySlice = createSlice({
  name: 'traitors',
  initialState: {
    traitors: [
      {
        id: '1',
        name: 'Vladimir',
        lastName: 'Putin',
      },
      // {
      //   id: '2',
      //   name: 'Barak',
      //   lastName: 'Obama',
      // },
      // {
      //   id: '3',
      //   name: 'Vladimir',
      //   lastName: 'Putin',
      // },
      // {
      //   id: '4',
      //   name: 'Danil',
      //   lastName: 'Usmanov',
      // },
      // {
      //   id: '5',
      //   name: 'Egor',
      //   lastName: 'Osokin',
      // },
    ],
  },
  reducers: {
    addTraitor: (state, action: any) => {
      const { payload } = action;
      state.traitors = [...state.traitors, payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTraitor } = countrySlice.actions;

export default countrySlice.reducer;
