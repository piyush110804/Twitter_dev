import LikeRepository from "../repository/like-repository.js";
import TweetRepository from "../repository/tweet-repository.js";
class LikeService {
  constructor(){
    this.likeRepository=new LikeRepository()
    this.tweetRepository=new TweetRepository()
  }

  async toggleLike(modelName,modelId,userId){
    if(modelName=='Tweet'){
      var likeable=await this.tweetRepository.find(modelId);

    }
    else if(modelName=='Comment'){
      //todo
    }
    else{
      throw new Error('no valid model')
    }
    const exist=await this.likeRepository.getLikeable({
      onModel:modelName,
      likeable:modelId,
      user:userId
    });
    if(exist){
      likeable.likes.pull(exist.id);
      await likeable.save();
      await exist.deleteOne();
      var isLiked=false;
    }
    else{
     const newLike =await this.likeRepository.create({
      onModel:modelName,
      likeable:modelId,
      user:userId
     });
     likeable.likes.push(newLike._id);
     await likeable.save();
     var isLiked=true;
    }
    return isLiked;
  }
}
export default LikeService