import posts from './postsState';
import albums from './albumsState';

const initialValues = {
  ...posts,
  ...albums
};

export default initialValues;
