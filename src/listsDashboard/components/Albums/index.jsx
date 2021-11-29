import React, { useEffect } from 'react';

// Context
import { useListsDashboardContext } from 'listsDashboard/context';

// Hooks
import useAlbums from 'listsDashboard/hooks/albums';

// Container
import withLists from 'listsDashboard/withLists';

// Components
import List from 'components/List';

// Styles
import * as S from './styles';

function Albums() {
  const { getAlbumsData } = useAlbums();
  const { listsDashboardState } = useListsDashboardContext();
  const { albums, albumsLoading, albumsError } = listsDashboardState;

  useEffect(() => {
    !albums && getAlbumsData();
    // eslint-disable-next-line
  }, []);

  return (
    <S.Wrapper>
      {albumsLoading && <p>Carregando albums...</p>}

      {albumsError && <p>Ops! Não foi possível carregar os albums :(</p>}

      {albums && (
        <>
          <h1>Albums</h1>
          <List items={albums} />
        </>
      )}
    </S.Wrapper>
  );
}

export default withLists(Albums);
