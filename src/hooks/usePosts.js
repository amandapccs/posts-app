import axios from "axios";
import { createContext, useContext } from "react";
import { useQuery } from "react-query";

const PostsContext = createContext();

export function PostsProvider({ children }) {
  const { data, isFetching, refetch } = useQuery('posts', async () => {
    const response = await axios.get('https://2fu9zsth55.execute-api.us-east-1.amazonaws.com');
    return response.data;
  });

  async function getPostById(id) {
    const response = await axios.get(`https://2fu9zsth55.execute-api.us-east-1.amazonaws.com/${id}`);
    return response.data;
  }

  async function createPost(post) {
    await axios.post('https://2fu9zsth55.execute-api.us-east-1.amazonaws.com/', post);
  }

  async function updatePost(id, post) {
    await axios.put(`https://2fu9zsth55.execute-api.us-east-1.amazonaws.com/${id}`, post);
  }

  async function deletePost(id) {
    await axios.delete(`https://2fu9zsth55.execute-api.us-east-1.amazonaws.com/${id}`);
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