import { validateToken } from "../utils/authentication.js"

const checkForAuthentication = (cookiename)=>{
    return (req,res,next)=>{
        const tokenCookiesValue = req.cookies[cookiename]
        if(!tokenCookiesValue){
            next()
        }

        try {
            const userPayload = validateToken(tokenCookiesValue)
            req.user = userPayload;
        } catch (error) {}
        next()
    }
}

export default checkForAuthentication

