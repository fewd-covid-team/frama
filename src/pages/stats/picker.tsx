import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pickUA, pickUSA, pickRU } from '../../store';
import {
  Button, Container, RoundedWrapper, PickedButton,
} from './index.styles';

function CountryPicker(): JSX.Element {
  const currentCountry: string = useSelector((state: any) => state.country.currentCountry);
  const dispatch = useDispatch();

  const uaButton = (
    (currentCountry === 'UA' && (
      <PickedButton aria-label="Pick UA" onClick={() => dispatch(pickUA())} type="button">
        Ukraine 🇺🇦
      </PickedButton>
    )) || (
      <Button aria-label="Pick UA" onClick={() => dispatch(pickUA())} type="button">
        Ukraine 🇺🇦
      </Button>
    )
  );

  const usaButton = (
    (currentCountry === 'USA' && (
      <PickedButton aria-label="Pick USA" onClick={() => dispatch(pickUSA())} type="button">
        USA 🇺🇸
      </PickedButton>
    )) || (
      <Button aria-label="Pick USA" onClick={() => dispatch(pickUSA())} type="button">
        USA 🇺🇸
      </Button>
    )
  );

  const ruButton = (
    (currentCountry === 'RU' && (
      <PickedButton aria-label="Pick RU" onClick={() => dispatch(pickRU())} type="button">
        Russia 🇷🇺
      </PickedButton>
    )) || (
      <Button aria-label="Pick RU" onClick={() => dispatch(pickRU())} type="button">
        Russia 🇷🇺
      </Button>
    )
  );

  return (
    <Container>
      <RoundedWrapper>
        {uaButton}
        {' '}
        {usaButton}
        {' '}
        {ruButton}
      </RoundedWrapper>
    </Container>
  );
}

export default CountryPicker;
