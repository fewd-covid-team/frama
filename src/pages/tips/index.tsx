import * as React from 'react';
import S from './index.styles';

function TipsScreen(): JSX.Element {
  return (
    <div>
      <S.Comments>
        <S.Comment left="0px" top="0px" background="#FD6AA0">
          <S.Name>
            <S.NameText>Danil Usmanov</S.NameText>
            <S.SuggestionText>Wash hands!</S.SuggestionText>
            <S.Logo src="static/emoji1.png" />
          </S.Name>
        </S.Comment>
        <S.Comment left="0px" top="228px" background="#6A79FD">
          <S.Name>
            <S.NameText>Danil Usmanov</S.NameText>
            <S.SuggestionText>Wash hands!</S.SuggestionText>
            <S.Logo src="static/emoji2.png" />
          </S.Name>
        </S.Comment>
        <S.Comment left="0px" top="456px" background="#E06AFD">
          <S.Name>
            <S.NameText>Danil Usmanov</S.NameText>
            <S.SuggestionText>Wash hands!</S.SuggestionText>
            <S.Logo src="static/emoji3.png" />
          </S.Name>
        </S.Comment>
        <S.Comment left="33%" top="114px" background="#98BF27">
          <S.Name>
            <S.NameText>Danil Usmanov</S.NameText>
            <S.SuggestionText>Wash hands!</S.SuggestionText>
            <S.Logo src="static/emoji4.png" />
          </S.Name>
        </S.Comment>
        <S.Comment left="33%" top="342px" background="#6AFDC8">
          <S.Name>
            <S.NameText>Danil Usmanov</S.NameText>
            <S.SuggestionText>Wash hands!</S.SuggestionText>
            <S.Logo src="static/emoji5.png" />
          </S.Name>
        </S.Comment>
      </S.Comments>
      <S.Grid>
        <S.Image src="static/home.png" />
        <S.Text>Stay Home</S.Text>
        <S.Text>Keep Social Distance</S.Text>
        <S.Image src="static/distance.png" />
        <S.Image src="static/hands.png" />
        <S.Text>Wash Hands</S.Text>
      </S.Grid>
    </div>
  );
}

export default TipsScreen;
