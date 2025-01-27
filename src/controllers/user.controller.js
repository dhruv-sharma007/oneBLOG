import User from "../models/user.model.js"

const signupHandler = async (req, res)=>{
    const {fullName, email, password} = req.body
    await User.create({
        fullName,
        email,
        password,
    });

    res.redirect('/home')
}

const signIn =async (req, res)=>{
    const { email, password } = req.body
    const user = await User.matchPassword(email, password)
    console.log("User:", user);
     
}

export {
    signupHandler,
    signIn
}

