import React from 'react';

// Store
import { ListsDashboardContext } from 'listsDashboard/context';

const withLists = (Component) => {
  return (props) => {
    return (
      <ListsDashboardContext>
        <Component {...props} />
      </ListsDashboardContext>
    );
  };
};

export default withLists;
