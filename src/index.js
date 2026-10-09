const express=require('express');
const app=express();
const TweetRepository=require('./repository/tweet-repository');
const Comment=require('./models/comment');
const connect=require('./config/db');
app.listen(3000,async()=>{
  console.log('server started');
  await connect();
  console.log('MongoDB server connected')
  //  const tweet=await Tweet.create({
  //   content:'This is first content'
  //  });
  const tweetRepo=new TweetRepository();
  const tweet=await tweetRepo.get('6ac7a7bcce5e1242fb9504b3');
   console.log(tweet.author);
})
