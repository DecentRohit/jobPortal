import bcrypt from 'bcrypt';
import UserModel from "../models/userSchema.js"
import { getAll } from "./jobController.js";


export const login = async(req, res , next)=>{
  try{
    const {email, password} = req.body;
    const user =  await UserModel.findOne({email});
    if(user){
        const passwordMatched = await bcrypt.compare(password , user.password)
        if(passwordMatched){
         const userName = user.name;
         const userID = user._id ;
         const userEmail = user.email;
        
        
          req.session.userInfo = {userID , userName , userEmail};
          console.log("logged in")
     
          res.redirect('/jobs')
        }else{
         res.render('userNotFound')
        }
    }else{
        res.render('userNotFound')
    }
   
  } catch(err){
    console.log(err)
    res.render('somethingWentWrong')
  }
   
   
    }
    export const logout = async(req, res)=>{
     await   req.session.destroy((err)=>{
            console.log("logged out successfully")
            if(err){
                console.log(err)
                res.end("failed to logout ")
            }
        })

        await res.clearCookie('lastVisit')
        res.redirect('/')
        
    }
    export const register = async(req, res)=>{
        const {name , email , password } = req.body;
        const user = await UserModel.findOne({email});
        if(user){
        console.log("user already exists")
        }else{
            const hashpassword = await bcrypt.hash(password , 12)
            const newRecruiter = await UserModel.create({name, email , password : hashpassword})
            await   newRecruiter.save();
        }
       
       res.redirect('/loginPage' )
    }
    
    export const loginPage = async (req, res)=>{
        res.render("login" )
    }
     
    export const home = async(req, res)=>{
        res.render("home" , {userInfo : req.session.userInfo})
    }
 