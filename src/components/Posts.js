import React from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { fetchPosts, deletePost } from '../api';

const Posts = () => {
  const queryClient = useQueryClient();
  const { data: posts, isLoading, error } = useQuery('posts', fetchPosts);
  const deletePostMutation = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    },
  });

  const handleDelete = (postId) => {
    deletePostMutation.mutate(postId);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.title}
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;