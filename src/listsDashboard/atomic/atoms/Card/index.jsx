import React from 'react';

// Styles
import * as S from './styles';

const Card = ({ title }) => {
  return title ? (
    <S.Card>
      <p>{title}</p>
    </S.Card>
  ) : null;
}

export default Card;
