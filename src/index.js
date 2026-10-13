import express from 'express'
const app=express();
import { connect } from './config/db.js';
// import routes from './routers/index.js';
import bodyParser from 'body-parser';
import UserRepository from './repository/user-repository.js';
import TweetRepository from './repository/tweet-repository.js';
import LikeService from './service/like-service.js';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000,async()=>{
  console.log('server started');
  await connect();
  console.log('MongoDB server connected');
 const userRepo=new UserRepository();
 const tweetRepo=new TweetRepository();
 const tweets= await tweetRepo.getall(0,10);
  const users=await userRepo.getAll();


 const likeService=new LikeService();
  await likeService.toggleLike('Tweet',tweets[0].id,users[0].id)
}) 
