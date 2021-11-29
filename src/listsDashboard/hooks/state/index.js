import { useContext } from 'react';

// Context
import { ListsContext } from 'listsDashboard/context';

const useListsDashboardContextState = () => {
  const { setListsDashboardState } = useContext(ListsContext);

  const handleState = (data = {}) => {
    setListsDashboardState((prevState) => {
      return {
        ...prevState,
        ...data
      };
    });
  };

  return { handleState };
};

export default useListsDashboardContextState;
