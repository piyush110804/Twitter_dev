import TweetService from "../service/tweet-service.js";
const tweetService=new TweetService();
 export const create=async(req,res)=>{
  
  try {
      const tweet= await tweetService.create(req.body);
    return res.status(201).json({
      data:tweet,
      msg:'Successfully created a tweet',
      err:{},
    })
  } catch (error) {
      return res.status(500).json({
      data:{},
      msg:'Could not create a tweet',
      err:error.message,
    })
  }
}

 export const getTweet=async(req,res)=>{
  
  try {
      const tweet= await tweetService.get(req.params.id);
    return res.status(200).json({
      data:tweet,
      msg:'Successfully fetched a tweet',
      err:{},
    })
  } catch (error) {
      return res.status(500).json({
      data:{},
      msg:'Could not fetched a tweet',
      err:error.message,
    })
  }
}

