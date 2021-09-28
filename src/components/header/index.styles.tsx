import styled from 'styled-components';
import { Link } from 'react-router-dom';

// TODO: make good
export const HeaderWrapper = styled.header`
  font-size: 1.5em;
  position: absolute;
  width: 100%;
  height: 84px;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 1);

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  //display: flex;
  flex-direction: column;
  //justify-content: center;
  max-width: 1000px;
`;

export const Row = styled.div`
  display: grid;
  margin: auto;
  vertical-align: middle;
  text-align: center;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill,
    minmax(200px, 1fr));
  }
`;

export const Column = styled.div`
  //display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: 60px;
`;

export const Logo = styled.a`
  position: static;
  width: 202px;
  height: 31px;
  left: 20px;
  top: 0px;

  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;
  text-transform: capitalize;

  color: #FFFFFF;


  /* Inside Auto Layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 2px;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;

  align-content: center;
  text-decoration: none;
  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const StyledLink = styled(Link)`
  position: static;
  width: 235px;
  height: 44px;
  left: 72.5px;
  top: 20px;

  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
  /* identical to box height */
  text-transform: capitalize;

  color: #FFFFFF;


  /* Inside Auto Layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0 102px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;

  //left: 50px;

  align-content: center;
  text-decoration: none;
  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;
