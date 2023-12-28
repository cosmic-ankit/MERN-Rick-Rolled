
import user from "../model/user.js"
 export const signupUser= async(req,res)=>{
    
      
        const {name,username,password} =req.body;
        //console.log(user);
        const data={
          name:name,
          username:username,
          password:password

        }
        try{
          const check=await  user.findOne({username:username})
         if(check)
         {
          return res.status(200).json({
            message:"user already exists", 
          })
         }
         else{
          console.log(data);
          console.log('register user succesfully');
          await user.insertMany([data])
         }
        
    }
        catch(error){
        return res.status(200).json({
        message:"error while singup by user", 
          })
    }
}

export const signinUser= async(req,res)=>{
    
      
  const {username1,password1} =req.body;
  //console.log(user);

  try{
    const check=await  user.findOne({username:username1})
    console.log(check);
   if(check)
   {
      res.json('exist')
   }
   else{
    res.json('notexist')
   }
  
}
  catch(error){
  return res.status(200).json({
  message:"error while singup by user", 
    })
}
}




