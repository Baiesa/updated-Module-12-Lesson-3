import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { updatePost } from '../api';

const UpdatePost = ({ post }) => {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const queryClient = useQueryClient();
  const updatePostMutation = useMutation(updatePost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePostMutation.mutate({ ...post, title, body });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <button type="submit">Update Post</button>
    </form>
  );
};

export default UpdatePost;