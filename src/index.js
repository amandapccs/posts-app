import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './utils/queryClient';
import { PostsProvider } from './hooks/usePosts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <PostsProvider>
        <App />
      </PostsProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
