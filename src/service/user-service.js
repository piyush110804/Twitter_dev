import UserRepository from "../repository/user-repository.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
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

  async signin(data){
   try {
    const user=await this.userRepo.findBy({email:data.email})
      if(!user){
        throw new Error('User not found')
      }
      const validpass=await this.comparePassword(data.password,user.password);
      if(!validpass){
       throw new Error('wrong password')
      }
    const token=this.genJWT(user.id,user.email);
    return token;
      
   } catch (error) {
    throw error;
   }
  }

  async comparePassword(plainpass,userpass){
   const result=await bcrypt.compare(plainpass,userpass);
   return result;
  }

    genJWT(userId,userEmail){
    const token=jwt.sign({
      id:userId,
      email:userEmail
    },
    "JWT_SECRET",
    {expiresIn: '1h'}
  )
  return token;
  }
}
export default UserService;