import React from "react";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import Post from "././Post/post";
import { CircularProgress, Grid } from "@material-ui/core";

const Posts = ({setCurrentId}) => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  console.log("These are the posts",posts);
  return !posts.length ? <CircularProgress /> : <Grid className={classes.mainContainer}>
     {
        posts.map((postItem)=>(
            <Grid key={postItem._id} item xs={12} sm={3}>
                   <Post post={postItem} setCurrentId={setCurrentId} />
                </Grid>
           

        ))
     }

  </Grid>;
};
export default Posts;
