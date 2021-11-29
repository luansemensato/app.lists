import React, { useEffect } from 'react';

// Context
import { useListsDashboardContext } from 'listsDashboard/context';

// Hooks
import useTodos from 'listsDashboard/hooks/todos';

// Container
import withLists from 'listsDashboard/withLists';

// Components
import List from 'components/List';

// Styles
import * as S from './styles';

function Todos() {
  const { getTodosData } = useTodos();
  const { listsDashboardState } = useListsDashboardContext();
  const { todos, todosLoading, todosError } = listsDashboardState;

  useEffect(() => {
    !todos && getTodosData();
    // eslint-disable-next-line
  }, []);

  return (
    <S.Wrapper>
      {todosLoading && <p>Carregando to-dos...</p>}

      {todosError && <p>Ops! Não foi possível carregar os to-dos :(</p>}

      {todos && (
        <>
          <h1>To-dos</h1>
          <List items={todos} />
        </>
      )}
    </S.Wrapper>
  );
}

export default withLists(Todos);
