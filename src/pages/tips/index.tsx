import * as React from 'react';
import S from './index.styles';

import emojiImg1 from '../../../static/emoji1.png';
import emojiImg2 from '../../../static/emoji2.png';
import emojiImg3 from '../../../static/emoji3.png';
import emojiImg4 from '../../../static/emoji4.png';
import emojiImg5 from '../../../static/emoji5.png';
import homeImg from '../../../static/home.png';
import distanceImg from '../../../static/distance.png';
import handsImg from '../../../static/hands.png';

function TipsScreen(): JSX.Element {
  return (
    <div>
      <S.Comments>
        <S.Comment left="0px" top="0px" background="#FD6AA0">
          <S.Text>
            <S.NameText>Danil Usmanov</S.NameText>
            <S.SuggestionText>Wash hands!</S.SuggestionText>
          </S.Text>
          <S.Logo src={emojiImg1} />
        </S.Comment>
        <S.Comment left="0px" top="228px" background="#6A79FD">
          <S.Text>
            <S.NameText>Egor Osokin</S.NameText>
            <S.SuggestionText>Wear mask!</S.SuggestionText>
          </S.Text>
          <S.Logo src={emojiImg2} />
        </S.Comment>
        <S.Comment left="0px" top="456px" background="#E06AFD">
          <S.Text>
            <S.NameText>Vladimir Putin</S.NameText>
            <S.SuggestionText>Pay taxes!</S.SuggestionText>
          </S.Text>
          <S.Logo src={emojiImg3} />
        </S.Comment>
        <S.Comment left="33%" top="114px" background="#98BF27">
          <S.Text>
            <S.NameText>Sputnik V</S.NameText>
            <S.SuggestionText>Take me!</S.SuggestionText>
          </S.Text>
          <S.Logo src={emojiImg4} />
        </S.Comment>
        <S.Comment left="33%" top="342px" background="#6AFDC8">
          <S.Text>
            <S.NameText>Innopolis University</S.NameText>
            <S.SuggestionText>Go to offline study!</S.SuggestionText>
          </S.Text>
          <S.Logo src={emojiImg5} />
        </S.Comment>
      </S.Comments>
      <S.Grid>
        <S.Image src={homeImg} />
        <S.BigText>Stay Home</S.BigText>
        <S.BigText>Keep Social Distance</S.BigText>
        <S.Image src={distanceImg} />
        <S.Image src={handsImg} />
        <S.BigText>Wash Hands</S.BigText>
      </S.Grid>
    </div>
  );
}

export default TipsScreen;
