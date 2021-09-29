import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10%;
  
  display: flex;
  position: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const RoundedWrapper = styled.div`
  position: static;
  width: 700px;
  height: 58.18px;
  left: 0;
  top: 42.27px;

  background: rgba(255, 242, 242, 0.3);
  border: 2px solid rgba(51, 51, 51, 0.5);
  border-radius: 34px;

  /* Inside Auto Layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  display: grid;
  margin: auto;
  vertical-align: middle;
  text-align: center;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill,
    minmax(200px, 1fr));
  }
`;

export const Button = styled.button`
  //flex-direction: column;
  //text-align: center;
  //position: absolute;
  //
  color: black;
  font-family: Inter,serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 18px;
  align-items: center;
  text-align: center;
  letter-spacing: -0.084px;
  
  border-radius: 100px;
  &:hover {
    color: white;
    background: #333333;
    transition: 200ms ease-in;
  }
`;

export const PickedButton = styled.button`
  //flex-direction: column;
  //text-align: center;
  //position: absolute;
  //
  color: white;
  font-family: Inter,serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 18px;
  align-items: center;
  text-align: center;
  letter-spacing: -0.084px;
  background: #333333;
  border-radius: 100px;
`;

export const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  //padding: 32px;

  position: absolute;
  width: 674px;
  height: 343px;
  left: 20%;
  top: 35%;

  background: rgba(255, 238, 238, 0.4);
  /* Greyscale/Silver */
  border: 1px solid #EAF0F8;
  box-sizing: border-box;
  border-radius: 16px;
`;

export const DiagramWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  //padding: 32px;

  position: absolute;
  width: 264px;
  height: 343px;
  left: 65%;
  top: 35%;

  background: rgba(255, 238, 238, 0.4);
  /* Greyscale/Silver */
  border: 1px solid #EAF0F8;
  box-sizing: border-box;
  border-radius: 16px;
`;
