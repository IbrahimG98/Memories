import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { deletePost,likePost } from "../../../actions/posts";
import moment from "moment";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const Post = ({ post,setCurrentId }) => {
  const classes = useStyles();
  const dispatch=useDispatch();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post?.selectedFile}
        title={post?.title}
      />
      <div>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: "white" }} size="small" onClick={() => setCurrentId(post._id)}>
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>
      <div>
      <CardContent>
      <Typography variant="body2" style={{color:"darkBlue"}} gutterBottom >{post.title}</Typography>
      </CardContent>
      </div>
      <div>
      <CardContent>
      <Typography variant="body2" color="textSecondary" gutterBottom >{post.message}</Typography>
      </CardContent>
      </div>
      <div className={classes.details}>
       <Typography variant="body2" color="textSecondary">#{post.tags
       }</Typography>
      </div>
      <CardActions>
          <Button size="small" color="primary" onClick={()=>dispatch(likePost(post._id))}>
            Like {post.likeCount}
          </Button>
          <div className={classes.deleteText}>
          <Button size="small" color="primary" onClick={()=>dispatch(deletePost(post._id))}>
            Delete
          </Button>
          </div>
      </CardActions>
    </Card>
  );
};
export default Post; 
