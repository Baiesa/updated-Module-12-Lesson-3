import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Posts from './components/Posts';
import CreatePost from './components/CreatePost';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <CreatePost />
        <Posts />
      </div>
    </QueryClientProvider>
  );
}

export default App;