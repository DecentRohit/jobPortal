import dotenv from "dotenv";
dotenv.config();
import express from "express";
import router from "./src/route/HomeRoutes.js";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import expressLayouts from 'express-ejs-layouts';
import session from "express-session";
import cookieParser from "cookie-parser";
import MongoStore from "connect-mongo";
import flash from 'connect-flash';
import flashMsg from "./src/middlewares/toasts.js";
import kue from 'kue';




const app  = express();



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cookieParser())
app.use(session({
  store: MongoStore.create({
    mongoUrl: 'mongodb://localhost:27017/sessions' , //storing session in mongodb, so it not lost on server restart
    ttl: 2 * 24 * 60 * 60 , //seesion expires in 2 days
    autoRemove: 'native' // Automatically remove expired sessions
}),
  
    secret : process.env.SECRET , 
    resave : false ,
    saveUninitialized : true ,
    cookie : {   maxAge: 1000 * 60 * 60, secure : false}
}))
app.use(flash());
app.use(flashMsg)

app.use(express.urlencoded({ extended: true }));
// Set the views directory
app.set('views', path.join(__dirname, './src/views'));

// Set the view engine (e.g., EJS)
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayouts);
app.set('layout', 'layout' ); // Points to `views/layout.ejs`

 //tell ejs where to put <link or script tag when encountered in pages
 app.set('layout extractStyles', true);
 app.set('layout extractScripts', true);
 app.use('/kue', kue.app);
app.use('/' , router);


// 4. Middleware to handle 404 requests.should be placed at end
app.use((req, res)=>{
    res.status(404).render('error' , { layout: false })
  });




export default app;