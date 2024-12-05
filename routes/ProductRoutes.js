import express from 'express';
import Comments from '../Comments.js';

const ProductRoutes = express.Router();

ProductRoutes.get('/',(req, res )=>{
        
    res.status(200).send ({status:200 , massage : " Success  ",data: Comments})
});

ProductRoutes.get('/:id',(req, res )=>{
        
    res.status(200).send ({status:200 , massage : " Success  ",data: []})
});




export default  ProductRoutes;