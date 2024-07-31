import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { createPost } from '../api';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const queryClient = useQueryClient();
  const createPostMutation = useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createPostMutation.mutate({ title, body });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
        required
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;