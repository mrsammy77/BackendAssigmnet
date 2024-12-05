import express from 'express';
import  Album from '../Album.js'

const AlbumRoutes = express.Router();



AlbumRoutes.get('/',(req, res )=>{
        
    res.status(200).send ({status:200 , massage : " Success  ",data: Album})
});

AlbumRoutes.get('/:id',(req, res )=>{
        
    res.status(200).send ({status:200 , massage : " Success  ",data: []})
});


export default  AlbumRoutes;