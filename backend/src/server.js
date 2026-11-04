import express from 'express';
import cors from 'cors';
import notesRoutes from './routes/notesRoutes.js';
import {connectDB} from './utility/dbconnection.js';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js'


dotenv.config();
const app = express();


//middleware 
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
}));
app.use(express.json());
app.use(rateLimiter);

// app.use((req, res, next) =>{
//     console.log(`req method: ${req.method} and req url: ${req.url}`);
//     next();
// });

app.use("/api/notes", notesRoutes);

connectDB().then(()=>{
    app.listen(process.env.PORT, () => {
    console.log("Server active on port:", process.env.PORT)
    });
});

