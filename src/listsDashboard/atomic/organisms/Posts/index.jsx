import React, { useEffect } from 'react';

// Context
import { useListsDashboardContext } from 'listsDashboard/context';

// Hooks
import usePosts from 'listsDashboard/hooks/posts';

// Container
import withLists from 'listsDashboard/withLists';

// Components
import PageHeader from 'listsDashboard/atomic/molecules/PageHeader';
import List from 'listsDashboard/atomic/molecules/List';

function Posts() {
  const { getPostsData } = usePosts();
  const { listsDashboardState } = useListsDashboardContext();
  const { posts, postsLoading, postsError } = listsDashboardState;

  useEffect(() => {
    !posts && getPostsData();
    // eslint-disable-next-line
  }, []);

  return (
    <main>
      <PageHeader
        title="Posts"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt et, excepturi, tenetur accusamus quis non, rerum fugit sunt aperiam enim illum."
      />

      <List items={posts} loading={postsLoading} error={postsError} />
    </main>
  );
}

export default withLists(Posts);
