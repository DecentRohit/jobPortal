//main index.js, app.use(cookieParser())

import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const jwtAuth = (req, res, next) => {
  // const token = req.headers['Authorization'] ;
  const token = req.cookies.userActive;
  if (!token) {
    res.render('userNotFound')
  }

  try {
    const payload = jwt.sign(token, process.env.SECRET)
    console.log("payload", payload)
    req.userInfo = payload;


  } catch (err) {
    console.log(err)
    res.end("error in jwt token")
  }
  next();
}
// //after login  const token = jwt.sign({userID , userEmail}, process.env.SECRET , { expiresIn : '1h'})
//    res.cookie('userActive' , token ,{maxAge : 1000*60*60})

//after logout
// res.clearCookie('userActive')
export default jwtAuth;

