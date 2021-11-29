import React from 'react';

// Styles
import * as S from './styles';

const List = ({ items }) => {
  return items ? (
    <S.Wrapper>
      {items.map(item => (
        <div className="item" key={item.id}>
          <p>{item.title}</p>
        </div>
      ))}
    </S.Wrapper>
  ) : null;
}

export default List;
