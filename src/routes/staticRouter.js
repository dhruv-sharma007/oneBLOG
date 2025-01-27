import { Router } from "express";

const router = Router();

router.get('/home', (req, res)=>{
    res.render('home')
})

router.get("/signin", (req, res)=>{
    return res.render('signin')
})

router.get("/signup", (req, res)=>{
    return res.render('signup')
})

export default router