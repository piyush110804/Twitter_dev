import express from 'express'
const app=express();
import TweetService from './service/tweet-service.js';
import { connect } from './config/db.js';
app.listen(3000,async()=>{
  console.log('server started');
  await connect();
  console.log('MongoDB server connected');
   const ser=new TweetService();
   await ser.create({content :'#refactoring done i #guess' })
})
