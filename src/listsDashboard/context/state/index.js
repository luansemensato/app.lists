import posts from './postsState';
import albums from './albumsState';
import todos from './todosState';

const initialValues = {
  ...posts,
  ...albums,
  ...todos
};

export default initialValues;
