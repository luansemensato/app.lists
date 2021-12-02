import React from 'react';

// Components
import Card from 'listsDashboard/atomic/atoms/Card';

// Styles
import * as S from './styles';

const List = ({ items, loading, error }) => {
  return (
    <S.Wrapper>
      {loading && <p>Carregando...</p>}

      {error && <p>Ops! Não foi possível carregar os dados :(</p>}

      {items?.map(item => <Card key={item.id} title={item.title} />)}
    </S.Wrapper>
  );
}

export default List;
