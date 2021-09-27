/* eslint no-param-reassign: 0 */
import { createSlice } from '@reduxjs/toolkit';

export const countrySlice = createSlice({
  name: 'country',
  initialState: {
    currentCountry: 'RU',
  },
  reducers: {
    pickUA: (state) => {
      state.currentCountry = 'UA';
    },
    pickUSA: (state) => {
      state.currentCountry = 'USA';
    },
    pickRU: (state) => {
      state.currentCountry = 'RU';
    },
  },
});

// Action creators are generated for each case reducer function
export const { pickUA, pickUSA, pickRU } = countrySlice.actions;

export default countrySlice.reducer;
