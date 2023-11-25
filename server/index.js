import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './routers/posts.js';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.port || 5000;

const URL = 'mongodb+srv://admin:Quynh.nhu219262377@cluster0.2gxrrwp.mongodb.net/?retryWrites=true&w=majority';



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());

app.use('/posts', posts)

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true})
 .then(()=>{
    console.log('Connected to DB');
    app.listen(PORT, () =>{
        console.log(`Server is running on  ${PORT}`);
 });

 }).catch(err =>{
    console.log('err', err);
 })

// app.listen(PORT, () =>{
//     console.log(`'Server is running on ${PORT}'`);
// })