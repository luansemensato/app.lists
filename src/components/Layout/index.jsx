import React from 'react';

// Components
import Footer from 'components/Footer';

// Styles
import * as S from './styles';

export default function DefaultTemplate({ children }) {
  return (
    <S.Wrapper>
      {children}

      <Footer />
    </S.Wrapper>
  );
}
