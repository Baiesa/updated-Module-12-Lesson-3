import axios from 'axios';

export const fetchPosts = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

export const createPost = async (newPost) => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
  return response.data;
};

export const updatePost = async (updatedPost) => {
  const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`, updatedPost);
  return response.data;
};

export const deletePost = async (postId) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  return postId;
};