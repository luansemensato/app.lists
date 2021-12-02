import React from 'react';

// Styles
import * as S from './styles';

const PageHeader = ({ title, description }) => {
  return title || description ? (
    <S.Header>
      {title && <h1>{title}</h1>}
      {description && <p>{description}</p>}
    </S.Header>
  ) : null;
}

export default PageHeader;
