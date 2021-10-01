import { configureStore } from '@reduxjs/toolkit';
// import { devToolsEnhancer } from 'redux-devtools-extension';
import countryReducer, { pickRU, pickUA, pickUSA } from '../features/country_stats/slice';

import traitorsReducer, { addTraitor } from '../features/traitors/slice';

export default configureStore({
  reducer: {
    country: countryReducer,
    traitors: traitorsReducer,
  },
  // devTools: false,
  // enhancers: [
  //   (window as any).__REDUX_DEVTOOLS_EXTENSION__
  // && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  // ],
});

export { pickUA, pickUSA, pickRU };

export { addTraitor };
