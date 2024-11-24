export const login = async(req, res)=>{
    res.render('home' , {title : "Rohit"})
    }
    export const logout = async(req, res)=>{
        res.end("logout")
        
    }
    export const register = async(req, res)=>{
        res.end("Register")
    }
    
    export const loginPage = async(req, res)=>{
        res.end("login Page")
    }
 