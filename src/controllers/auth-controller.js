import UserService from "../service/user-service.js";
const userService=new UserService();
export const signup=async(req,res)=>{
  try {
    const response=await userService.signup({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password
    });
     return res.status(201).json({
      data: response,
      success: true,
      err: {},
      msg: "Successfully created a new user"
    });
  } catch (error) {
    console.log(error);
     return res.status(500).json({
      data:{},
      success: false,
      err: error.message,
      msg: "Could not create a new user"
    });
  }
}

export const signin=async(req,res)=>{
   try {
    const token=await userService.signin({
      email:req.body.email,
      password:req.body.password
    });
    return res.status(200).json({
      data: token,
      success: true,
      err: {},
      msg: "Successfully signed in"
    });
   } catch (error) {
     console.log(error);
     return res.status(401).json({
      data:{},
      success: false,
      err: error.message,
      msg: "Could not sign in"
    });
   }
}
