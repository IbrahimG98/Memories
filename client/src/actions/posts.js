import * as api from "../api";

export const getPosts = () => async (dispatch) => {
  try {
    const  data  = await api.fetchPosts();

    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  
  try {
   const postData =await api.createPost(post);
   //vrati prazan data kao postData
    dispatch({ type: 'CREATE', payload: post });
  } catch (error) {
    console.log(error.message);
  }
};
