import bcrypt from 'bcrypt';
import UserModel from "../models/userSchema.js"







// import Swal from 'sweetalert2/dist/sweetalert2.js'


export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            const passwordMatched = await bcrypt.compare(password, user.password)
            if (passwordMatched) {
                const userName = user.name;
                const userID = user._id;
                const userEmail = user.email;


                req.session.userInfo = { userID, userName, userEmail };

                req.flash('success', "logged in successfully")




                res.redirect('/jobs')
            } else {
                req.flash('error', "Incorrect Email or Password")
                res.redirect('back')
            }
        } else {
            res.render('userNotFound')
        }

    } catch (err) {
        console.log(err)
        res.render('somethingWentWrong')
    }


}
export const logout = async (req, res) => {
    try {
        await req.session.destroy((err) => {

            console.log("logged out successfully")

            if (err) {
                console.log(err)
            }
        })

        await res.clearCookie('lastVisit')

        res.redirect('/')

    } catch (err) {
        console.log(err)
        res.render('somethingWentWrong')
    }

}
export const register = async (req, res) => {
    const { name, email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
        console.log("user already Exist")
        req.flash('error', "user already Exist")
    } else {
        const hashpassword = await bcrypt.hash(password, 12)
        const newRecruiter = await UserModel.create({ name, email, password: hashpassword })
        await newRecruiter.save();
    }
    req.flash('success', "Registered Successfully")
    res.redirect('/loginPage')
}

export const loginPage = async (req, res) => {
    res.render("login")
}

export const home = async (req, res) => {




    res.render("home", { userInfo: req.session.userInfo })
}
