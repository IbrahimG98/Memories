import React from "react";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import Post from "./Post/post";

const Posts =()=>{
    const classes=useStyles();
    const posts=useSelector((state)=>state.posts);
    console.log(posts);
return(
    <div>
        <h1>Posts component</h1>
        <Post />
        <Post />

    </div>
)
};
export default Posts;