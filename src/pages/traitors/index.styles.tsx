import styled from 'styled-components';
import { Field as FieldFormik } from 'formik';

export const TraitorScreenWrapper = styled.div`
  font-size: 1.5em;
  margin-top: 7%;
`;

export const Title = styled.p`
  display: flex;
  position: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
  margin: 6% auto auto;
  width: 456px;
  height: 61px;
  font-family: Inter, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 61px;
  color: #FFFFFF;
`;

export const Table = styled.table`
  display: flex;
  position: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px auto auto;
  width: 743px;
  height: 100%;
  overflow: auto;
`;

export const Input = styled.input`

`;

export const Th = styled.th`
  text-align: center;

  margin: 12px;
  padding: 12px;
  font-family: Inter, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  width: 750px;
  color: #FFFFFF;

  opacity: 0.8;
`;

export const Td = styled.th`
  text-align: center;
  width: 750px;
  margin: 12px;
  padding: 12px;
  font-family: Inter, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  color: #FFFFFF;
  opacity: 0.87;
`;

export const Container = styled.div`
  margin-top: 10px;
  
  display: flex;
  position: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Field = styled(FieldFormik)`
  position: static;
  width: 360px;
  height: 48px;
  margin: 10px;
  
  background: rgba(255, 255, 255, 0.4);
  border: 1px solid #D0D4D9;
  box-sizing: border-box;
  border-radius: 34px;
  padding: 16px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: rgba(0, 0, 0, 0.5);
    font-family: Inter, serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    margin: 1em;
    position: static;
    text-align: left;
    align-content: center;
    display: table-cell;
    vertical-align: middle;
  }
  :-ms-input-placeholder {
    color: rgba(0, 0, 0, 0.5);
    font-family: Inter, serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    margin: 1em;
    position: static;
    text-align: left;
    align-content: center;
    display: table-cell;
    vertical-align: middle;
  }
  color: rgba(0, 0, 0, 1);
  font-family: Inter, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  align-content: center;
  display: table-cell;
  vertical-align: middle;
`;

export const Button = styled.button`
  flex-direction: row;
  align-items: center;
  padding: 16px 32px;

  position: static;
  margin: 10px;
  width: 300px;
  height: 70px;

  background: rgba(255, 255, 255, 0.1);
  border-radius: 34px;

  text-align: center;
  align-content: center;
  display: table-cell;
  vertical-align: middle;

  font-family: Inter, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 19px;
  color: #888aff;


  &:hover {
    color: black;
    background: rgba(255, 255, 255, 0.9);
    transition: 200ms ease-in;
  }
`;
