import axios from "axios";
import { createContext, useContext } from "react";
import { useQuery } from "react-query";

const PostsContext = createContext();

export function PostsProvider({ children }) {
  const { data, isFetching, refetch } = useQuery('posts', async () => {
    const response = await axios.get('http://localhost:3000');
    return response.data;
  });

  async function getPostById(id) {
    const response = await axios.get(`http://localhost:3000/${id}`);
    return response.data;
  }

  async function createPost(post) {
    try {
      const response = await axios.post('http://localhost:3000/', post);
      return response;
    } catch(e) {
      return e.response.data;
    }
  }

  async function updatePost(id, post) {
    await axios.put(`http://localhost:3000/${id}`, post);
  }

  async function deletePost(id) {
    await axios.delete(`http://localhost:3000/${id}`);
  }

  return (
    <PostsContext.Provider value={{ data, isFetching, createPost, updatePost, getPostById, deletePost, refetch }}>
      {children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  const context = useContext(PostsContext);
  return context;
}