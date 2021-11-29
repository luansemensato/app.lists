import React, { createContext, useContext, useState } from 'react';
import initialValues from './state';

const ListsContext = createContext(initialValues);

const useListsDashboardContext = () => {
  return useContext(ListsContext);
};

const ListsDashboardContext = ({ children }) => {
  const [listsDashboardState, setListsDashboardState] = useState(initialValues);

  return (
    <ListsContext.Provider value={{ listsDashboardState, setListsDashboardState }}>
      {children}
    </ListsContext.Provider>
  );
};

export { ListsContext, useListsDashboardContext, ListsDashboardContext };
