const express=require('express');
const app=express();
const TweetRepository=require('./repository/tweet-repository');
const Comment=require('./models/comment');
const connect=require('./config/db');
const TweetService=require('./service/tweet-service');
const HashtagRepository = require('./repository/hashtag-repository');
app.listen(3000,async()=>{
  console.log('server started');
  await connect();
  console.log('MongoDB server connected');
  
})
