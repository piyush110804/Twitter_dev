import express from 'express'
const app=express();
import { connect } from './config/db.js';
// import routes from './routers/index.js';
import bodyParser from 'body-parser';
import UserRepository from './repository/user-repository.js';
import TweetRepository from './repository/tweet-repository.js';
import LikeService from './service/like-service.js';

import router from './routers/index.js';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000,async()=>{
  console.log('server started');
  await connect();
  console.log('MongoDB server connected');
 app.use('/api',router)
}) 
