// Service
import listsDashboardService from 'api/service';

// Hooks
import useListsDashboardContextState from 'listsDashboard/hooks/state';

const usePosts = () => {
  const { handleState } = useListsDashboardContextState();
  const { getPosts } = listsDashboardService();

  const getPostsData = (storeId) => {
    handleState({
      postsLoading: true
    });

    getPosts(storeId)
      .then(({ data }) => {
        handleState({
          posts: data,
          postsLoading: false
        });
      })
      .catch((err) => {
        const error = err.response?.data || err;
        handleState({
          postsError: error,
          postsLoading: false
        });
      })
      .finally(() => {
        handleState({
          postsLoading: false
        });
      });
  };

  return { getPostsData };
};

export default usePosts;
