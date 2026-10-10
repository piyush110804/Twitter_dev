const HashtagRepository = require('../repository/hashtag-repository');
const TweetRepository=require('../repository/tweet-repository');

class TweetService{
  constructor(){
    this.tweetRepository=new TweetRepository();
    this.hashtagRepository=new HashtagRepository();
  }
 async create(data){
    const content=data.content;
    let tags = content.match(/#[a-zA-Z0-9_]+/g) || [];//used to filer all hastags
     tags = tags.map(tag => tag.slice(1));
    const tweet=await this.tweetRepository.create(data);
    let presentTags=await this.hashtagRepository.findByname(tags);
      const presentTitles = presentTags.map(tag => tag.title);



    let newTags=tags.filter((tags)=>!presentTitles.includes(tags));
    newTags=newTags.map((tag)=>({title:tag,tweets:[tweet._id]})); 
    const response = await this.hashtagRepository.bulkCreate(newTags);
    presentTags.forEach((tag)=>{
      tag.tweets.push(tweet._id);
      tag.save();
    })
  return tweet;
  }

}

module.exports=TweetService;