import jwt from 'jwtwebtoken'
export function verifyToken() {

    //Get token from req
    let signedToken = req.cookies.token
    if(!signedToken) {
        return res.status(400).json({message:"Please Login First"})
    }

    //verify the token
    let decodedToken = jwt.verify(signedToken,'123455') 
    
        console.log("decoded token: ".decodedToken);
        next();
}