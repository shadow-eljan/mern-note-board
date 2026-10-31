import express from 'express';
import dotenv from 'dotenv';
import connect from './utility/db.js';
import route2 from './routes/routing.js';

dotenv.config();

const app = express();

connect();
app.use(express.json());
app.use("/api/names", route2);

app.listen(5001, ()=>{
    console.log("Server active on port 5001.")
});
