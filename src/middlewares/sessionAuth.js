const checkAuth = (req, res, next) =>{
    if(req.session.userInfo){
        console.log("user authorized")
        next();
    }else{
        res.render('userNotFound')
    }
}

export default checkAuth;