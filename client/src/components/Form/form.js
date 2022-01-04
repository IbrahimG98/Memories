import React, { useEffect, useState } from "react";
import { Paper, TextField, Button, Typography } from "@material-ui/core";
import FileBase from "react-file-base64";
import {useDispatch,useSelector} from "react-redux";
import {createPost,updatePost} from "../../actions/posts";
import useStyles from "./styles";

const Form = ({currentId,setCurrentId}) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const post=useSelector((state)=>currentId?state.posts.find((p)=>p._id===currentId):null);
  useEffect(()=>{
    if(post)
    {
      setPostData(post);
    }
  },[post]);
  const classes = useStyles();
  const dispatch=useDispatch();
  const handleSubmit = (e) => {
      e.preventDefault();
      if(currentId)
      {
        console.log("this is patch post data",postData);
        dispatch(updatePost(currentId,postData));
      }
      else
      {dispatch(createPost(postData));}

      handleClear();

  };
  const handleClear=()=>{
    // setCurrentId(null);
    // setPostData({
    //   creator: "",
    //   title: "",
    //   message: "",
    //   tags: "",
    //   selectedFile: "",
    // });
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">{currentId?'Editing':'Creating'} a memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData?.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        /><br></br>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData?.title}
          onChange={(e) =>
            setPostData({ ...postData, title: e.target.value })
          }
        /><br></br>
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData?.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData?.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value })
          }
        />
         <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div><br></br>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="small" type="submit" onClick={handleClear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};
export default Form;
