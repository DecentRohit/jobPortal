const checkAuth = (req, res, next) =>{
   console.log(req.params.id)
    if(req.session.userInfo){
        console.log("user authorized")
        next();
    }else{
        res.render('userNotFound')
    }
}

export default checkAuth;