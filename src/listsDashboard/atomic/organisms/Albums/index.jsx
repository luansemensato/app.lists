import React, { useEffect } from 'react';

// Context
import { useListsDashboardContext } from 'listsDashboard/context';

// Hooks
import useAlbums from 'listsDashboard/hooks/albums';

// Container
import withLists from 'listsDashboard/withLists';

// Components
import PageHeader from 'listsDashboard/atomic/molecules/PageHeader';
import List from 'listsDashboard/atomic/molecules/List';

function Albums() {
  const { getAlbumsData } = useAlbums();
  const { listsDashboardState } = useListsDashboardContext();
  const { albums, albumsLoading, albumsError } = listsDashboardState;

  useEffect(() => {
    !albums && getAlbumsData();
    // eslint-disable-next-line
  }, []);

  return (
    <main>
      <PageHeader
        title="Albums"
        description="Lorem ipsum Albums, dolor sit amet consectetur adipisicing elit. Incidunt et, excepturi, tenetur accusamus quis non, rerum fugit sunt aperiam enim illum."
      />

      <List items={albums} loading={albumsLoading} error={albumsError} />
    </main>
  );
}

export default withLists(Albums);
