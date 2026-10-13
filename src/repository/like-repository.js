import Like from "../models/like.js";
import CrudRepository from "./crud-repository.js";

class LikeRepository extends CrudRepository{
  constructor(){
    super(Like);
  }
  async getLikeable(data){
  
   try {
     const likes=await Like.findOne(data)
   return likes;
   } catch (error) {
      console.log('Something went wrong in Repository');
      throw error;
      
   }
  }
}
export default LikeRepository