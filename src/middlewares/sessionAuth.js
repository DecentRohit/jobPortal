const checkAuth = (req, res, next) => {

    if (req.session.userInfo) {
        console.log("user authorized")
        res.locals.userInfo = req.session.userInfo;
        next();
    } else {
        res.render('userNotFound')
    }
}

export default checkAuth;