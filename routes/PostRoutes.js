import express from 'express';
import Post from '../Post.js';

const PostRoutes = express.Router();

PostRoutes.get('/',(req, res )=>{
        
    res.status(200).send ({status:200 , massage : " Success  ",data: Post})
});

PostRoutes.get('/:id',(req, res )=>{
        
    res.status(200).send ({status:200 , massage : " Success  ",data: []})
});




export default  PostRoutes;