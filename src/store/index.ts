import { configureStore } from '@reduxjs/toolkit';
import countryReducer, {
  pickRU, pickUA, pickUSA,
} from './slice';

export default configureStore({
  reducer: {
    country: countryReducer,
  },
});

export { pickUA, pickUSA, pickRU };
