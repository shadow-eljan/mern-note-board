import ratelimit  from '../utility/upstash.js';

const rateLimiter = async (req, res, next)  =>{
    try {
        const key = req.ip;
        const {success} = await ratelimit.limit(key);
        console.log(req.ip);
        if(!success){
            return res.status(429).json({
                message: "Too many Requests."
            })
        }
        next();

    } catch (error) {
        next(error);
    }
};

export default rateLimiter;