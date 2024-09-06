import express from 'express';
import cors from 'cors';
import router from './routes/router.js';
import mongoose from 'mongoose';

const app = express();
const port=5000;


app.use(express.json());
app.use(cors());    
app.use(express.urlencoded({extended:false}));
app.use('/',router)
mongoose.connect('mongodb://127.0.0.1:27017/Urls').then(()=>{
    app.listen(port,()=>{
        console.log("Server is running on port 5000")
    })
}).catch(()=>{
    console.log("Error")
})



