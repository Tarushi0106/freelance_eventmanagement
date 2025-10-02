const jwt = require("jsonwebtoken");

// Authentication middleware

const authmiddleware = (req , res , next) =>{
    const token = req.header('Authorization')?.replace('Brearer' , "");
    if(!token){
        return res.status(401).json({message:"No token , authorization denied"});
    }
    try{
        const decoded = jwt.verify(token , "your_jwt_secret");
        req.user = decoded;
        next();

    }catch(error){
        res.status(401).json({message:"Token is not valid"});
        console.error("Authentication error:", error);
        next();
        
    }
}