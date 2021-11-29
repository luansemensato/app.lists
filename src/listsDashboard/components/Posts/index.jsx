import React, { useEffect } from 'react';

// Context
import { useListsDashboardContext } from 'listsDashboard/context';

// Hooks
import usePosts from 'listsDashboard/hooks/posts';

// Container
import withLists from 'listsDashboard/withLists';

// Components
import List from 'components/List';

// Styles
import * as S from './styles';

function Posts() {
  const { getPostsData } = usePosts();
  const { listsDashboardState } = useListsDashboardContext();
  const { posts, postsLoading, postsError } = listsDashboardState;

  useEffect(() => {
    !posts && getPostsData();
    // eslint-disable-next-line
  }, []);

  return (
    <S.Wrapper>
      {postsLoading && <p>Carregando posts...</p>}

      {postsError && <p>Ops! Não foi possível carregar os posts :(</p>}

      {posts && (
        <>
          <h1>Posts</h1>
          <List items={posts} />
        </>
      )}
    </S.Wrapper>
  );
}

export default withLists(Posts);
