// import ratelimit from "../utility/up.js";

// export const rateLimiter = async (req, res, next) => {
//     try{
//         const key = req.ip;
//         const {success} = await ratelimit.limit(key);
//         console.log(req.ip);
//         if(!success){
//             res.status(429).send("Too many Requests.");
//         }
//         next();
//     }catch(error){
//         next(error);
//     }
// };


import { ratelimit } from '../utility/up.js';

export const rateLimiter = async (req, res, next) =>{
    try{
        const {success} = await ratelimit.limit(req.ip);
        if(!success){
            res.status(429).send("Too many requests.");
        }
        next()
    }catch(error){
        res.status(500).send("Internal server error.");
        next(error);
    }
};