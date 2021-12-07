import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import moment from "moment";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const Post = ({ post,setCurrentId }) => {
  console.log("This is post in a loop", post);
  const classes = useStyles();
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
        <Button style={{ color: "white" }} size="small" onClick={() => {setCurrentId(post._id)}}>
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>
      <div className={classes.details}>
       <Typography variant="body2" color="textSecondary">#{post.tags
       }</Typography>
      </div>
       <CardContent>
      <Typography variant="body2" color="textSecondary" gutterBottom >{post.message}</Typography>
      </CardContent>
      <CardActions>
          <Button size="small" color="primary" onClick={()=>{}}>
            Like {post.likeCount}
          </Button>
          <div className={classes.deleteText}>
          <Button size="small" color="primary" onClick={()=>{}}>
            Delete
          </Button>
          </div>
      </CardActions>
    </Card>
  );
};
export default Post; 
