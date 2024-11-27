import UserModel from "../models/userSchema.js"
import { getAll } from "./jobController.js";

export const login = async(req, res)=>{
   const {email, password} = req.body;
   const user =  await UserModel.findOne({email,password });
   if(!user){
    res.render('userNotFound')
   }
 
    res.locals.user = user; 
    req.session.user = user;
    console.log("logged in")
    getAll(req, res);
 
   
    }
    export const logout = async(req, res)=>{
   delete res.locals.user ;
     await   req.session.destroy((err)=>{
            console.log("logged out successfully")
            if(err){
                console.log(err)
                res.end("failed to logout ")
            }
        })
        res.redirect('/')
        
    }
    export const register = async(req, res)=>{
        const {name , email , password } = req.body;
        const user = UserModel.findOne({email});
        if(user){
        console.log("user already exists")
        }
        const newRecruiter = await UserModel.create({name, email , password})
            await   newRecruiter.save();
       res.redirect('/loginPage' )
    }
    
    export const loginPage = async(req, res)=>{
        res.render("login" , ({title : "Rohit"}))
    }
     
    export const home = async(req, res)=>{
        res.render("home")
    }
 