import axios from 'axios';

const urlPosts = 'http://localhost:27017/relations';

export const fetchRelations = () => axios.get(urlPosts);
// export const createRelation = (newPost) => axios.post(urlPosts, newPost);
// export const deleteRelation = (id) => axios.delete(`${urlPosts}/${id}`);
