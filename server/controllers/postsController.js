import PostMessage from "../models/postMessage.js";
export const getPosts=async (req,res)=>{
    try {
    const postMessages=await PostMessage.find();
    res.status(200).json(postMessages);
        
    } catch (error) {
        res.status(404).json({message:error.message});
    }
 }

 export const createPost=async (req,res)=>{

    const post=req.body;
    // const { title, message, selectedFile, creator, tags } = req.body;

    // const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })
    console.log("this is post", req.body);
    const newPost=new PostMessage(post);
    console.log("this is new Post", newPost);
    try {
        await newPost.save();
        res.status(201).json(newPost);
        // return newPost;
        
    } catch (error) {
        res.status(404).json({message:error.message});
    }

 };