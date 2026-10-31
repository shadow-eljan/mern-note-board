import express from 'express';
import dotenv from 'dotenv';
import connect from './utility/db.js';
import route2 from './routes/routing.js';
import { rateLimiter } from './middleware/rl.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(rateLimiter);


app.use("/api/names", route2);

connect().then (()=>{
    app.listen(5001, ()=>{
    console.log("Server active on port 5001.")
    });
});
