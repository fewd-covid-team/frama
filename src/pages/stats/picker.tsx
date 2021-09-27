import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pickUA, pickUSA, pickRU } from '../../store';

function CountryPicker(): JSX.Element {
  const currentCountry = useSelector((state: any) => state.country.currentCountry);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button aria-label="Pick UA" onClick={() => dispatch(pickUA())} type="button">
          UA
        </button>
        <button aria-label="Pick USA" onClick={() => dispatch(pickUSA())} type="button">
          USA
        </button>
        <button aria-label="Pick RU" onClick={() => dispatch(pickRU())} type="button">
          RU
        </button>
        <span>
          {' '}
          Picked:
          {currentCountry}
        </span>
      </div>
    </div>
  );
}

export default CountryPicker;
