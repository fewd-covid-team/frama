import styled from 'styled-components';

const Comments = styled.div`
  width: 453px;
  height: 670px;
  opacity: 1;
  position: absolute;
  top: 20%;
  left: 10%;
  overflow: hidden;
`;

const Comment = styled.div<{ left: string, top: string, background: string }>`
  position: absolute;
  left: ${(props) => props.left ?? 'auto'};
  top: ${(props) => props.top ?? 'auto'};
  width: 300px;
  height: 100px;

  background: ${(props) => props.background ?? '#FD6AA0'};
  border: 3px solid rgba(255, 255, 255, 0.35);
  box-sizing: border-box;
  border-radius: 18px;
  `;

const Name = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;

  position: absolute;
  width: 131px;
  height: 25px;
  left: 20px;
  top: 11px;
`;

const NameText = styled.p`
  position: static;

  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;

  color: #292E46;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0 10px;
`;

const SuggestionText = styled.p`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;

  position: absolute;
  width: 147px;
  height: 14px;
  top: 36px;

  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 14px;

  color: #000000;

  opacity: 0.8;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0 10px;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 50%;
  margin-right: 0;
  align-content: center;
  display: flex;
  align-items: center;
  justify-content: center;
  float: right;
`;

const Grid = styled.div`
  width: 630px;
  height: 600px;
  opacity: 1;
  position: absolute;
  top: 20%;
  left: 50%;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 30% 20%;
  grid-gap: 30px;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 200px;
  size: 30px;
  align-content: center;
  display: flex;
  align-items: center;
  justify-content: center;
  //margin: auto;'
`;

Image.defaultProps = {
  src: '.',
};

const Text = styled.p`
  align-content: center;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  font-style: normal;
  font-family: Inter, serif;
  font-weight: 500;
  font-size: 50px;
  line-height: 61px;
`;

const S = {
  Comment, Logo, SuggestionText, NameText, Name, Comments, Grid, Image, Text,
};

export default S;
