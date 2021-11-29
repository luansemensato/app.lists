// Service
import listsDashboardService from 'api/service';

// Hooks
import useListsDashboardContextState from 'listsDashboard/hooks/state';

const useTodos = () => {
  const { handleState } = useListsDashboardContextState();
  const { getTodos } = listsDashboardService();

  const getTodosData = (storeId) => {
    handleState({
      todosLoading: true
    });

    getTodos(storeId)
      .then(({ data }) => {
        handleState({
          todos: data,
          todosLoading: false
        });
      })
      .catch((err) => {
        const error = err.response?.data || err;
        handleState({
          todosError: error,
          todosLoading: false
        });
      })
      .finally(() => {
        handleState({
          todosLoading: false
        });
      });
  };

  return { getTodosData };
};

export default useTodos;
