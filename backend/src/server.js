import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import {connectDB} from './utility/dbconnection.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

connectDB();

//middleware 
app.use(express.json());

app.use("/api/notes", notesRoutes);

app.listen(process.env.PORT, () => {
    console.log("Server active on port:", process.env.PORT)
});