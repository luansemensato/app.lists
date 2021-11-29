// Service
import listsDashboardService from 'api/service';

// Hooks
import useListsDashboardContextState from 'listsDashboard/hooks/state';

const useAlbums = () => {
  const { handleState } = useListsDashboardContextState();
  const { getAlbums } = listsDashboardService();

  const getAlbumsData = (storeId) => {
    handleState({
      albumsLoading: true
    });

    getAlbums(storeId)
      .then(({ data }) => {
        handleState({
          albums: data,
          albumsLoading: false
        });
      })
      .catch((err) => {
        const error = err.response?.data || err;
        handleState({
          albumsError: error,
          albumsLoading: false
        });
      })
      .finally(() => {
        handleState({
          albumsLoading: false
        });
      });
  };

  return { getAlbumsData };
};

export default useAlbums;
