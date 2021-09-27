import { configureStore } from '@reduxjs/toolkit';
import countryReducer, {
  pickRU, pickUA, pickUSA,
} from '../features/country_stats/slice';

import traitorsReducer, {
  addTraitor,
} from '../features/traitors/slice';

export default configureStore({
  reducer: {
    country: countryReducer,
    traitors: traitorsReducer,
  },
});

export { pickUA, pickUSA, pickRU };

export { addTraitor };
