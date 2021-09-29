import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pickUA, pickUSA, pickRU } from '../../store';
import { Button, Container, RoundedWrapper } from './index.styles';

function CountryPicker(): JSX.Element {
  const currentCountry = useSelector((state: any) => state.country.currentCountry);
  const dispatch = useDispatch();

  return (
    <Container>
      <RoundedWrapper>
        <Button aria-label="Pick UA" onClick={() => dispatch(pickUA())} type="button">
          Ukraine 🇺🇦
        </Button>
        <Button aria-label="Pick USA" onClick={() => dispatch(pickUSA())} type="button">
          USA 🇺🇸
        </Button>
        <Button aria-label="Pick RU" onClick={() => dispatch(pickRU())} type="button">
          Russia 🇷🇺
        </Button>
      </RoundedWrapper>
    </Container>
  );
}

export default CountryPicker;
