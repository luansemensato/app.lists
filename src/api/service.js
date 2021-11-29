import api from 'api/client';

export default function listsDashboardService() {
  const getPosts = async () => {
    return api.get(`/posts`);
  };

  const getAlbums = async () => {
    return api.get(`/albums`);
  };

  const getTodos = async () => {
    return api.get(`/todos`);
  };

  return {
    getPosts,
    getAlbums,
    getTodos
  };
}
