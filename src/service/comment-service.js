import CommentRepository from "../repository/comment-repository.js";
import TweetRepository from "../repository/tweet-repository.js"
class CommentService{
constructor(){
  this.commentRepo=new CommentRepository();
  this.tweetRepo=new TweetRepository();
}

async create(modelId,modelName,userId,content){
  if(modelName=='Tweet'){
   var commentable=await this.tweetRepo.get(modelId);
  }
  else if(modelName=='Comment'){
    var commentable=await this.commentRepo.get(modelId);
  }
  else{
    throw new Error('Not a  valid model');
  }
  const comment=await this.commentRepo.create({
    onModel:modelName,
    content:content,
    commentable:modelId,
    user:userId,
    comments:[]
  });
  commentable.comments.push(comment.id);
  await commentable.save();
  return comment;
}
}
export default CommentService;