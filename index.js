import express from 'express';
import 'dotenv/config';

import ProductRoutes from './routes/ProductRoutes.js';
import PostRoutes from './routes/PostRoutes.js';
import AlbumRoutes from './routes/AlbumRoutes.js';

const app = express();


app.get('/',(req, res )=>{
   
res.status(200).send ('welcome to the BackEnd')
})



  app.use('/products',ProductRoutes);
  app.use('/Posts',PostRoutes);
  app.use('/Albums',AlbumRoutes);

// app.get('/users/:id',(req, res )=>{
//     const  id = req.params.id;
//     res.status(200).send ('welcome to the product ' + id)
//     })
    
    
    
//     app.get('/Comments',(req, res )=>{
        
//         res.status(200).send ({status:200 , massage : "you are loggin ",data: Comments})
//     })
    
    
//     app.get('*',(req, res )=>{
   
//         res.status(404).send ('page not found')
//         })
    
const PORT = process.env.PORT


app.listen(PORT,()=>{
console.log('server is running  on port' + PORT)

})
