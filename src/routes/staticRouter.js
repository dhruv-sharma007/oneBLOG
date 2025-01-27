import { Router } from "express";

const router = Router();

router.get('/', (req, res)=>{
    return res.render('home',{
        user: req.user
    })

})

router.get("/signin", (req, res)=>{
    return res.render('signin')
})

router.get("/signup", (req, res)=>{
    return res.render('signup')
})

router.get("/add-blog", (req, res)=>{
    return res.render('addBlog',{
        user: req.user,
    })
})

export default router