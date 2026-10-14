import UserRepository from "../repository/user-repository.js";

class UserService{
  constructor(){
    this.userRepo=new UserRepository();
  }
  async signup(data){
    try {
      const user=await this.userRepo.create(data);
       return user
    } catch (error) {
      throw error;
    }
  }
}
export default UserService;