import React,{useEffect} from "react";
import { Container, AppBar, Grid, Typography, Grow } from "@material-ui/core";
import { useDispatch } from "react-redux";
import memories from "./assets/memoriesLogo.jpg";
import Posts from "./components/Posts/posts";
import Form from "./components/Form/form";
import {getPosts} from "./actions/posts";
import useStyles from "./styles";

const App = () => {
    const classes=useStyles();
    const dispatch=useDispatch();

    useEffect(()=>{
      dispatch(getPosts());
    },[dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        {/* <Typography variant="h2" align="center">Memo App</Typography> */}
        <img className={classes.image} src={memories} alt="logo"  />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
