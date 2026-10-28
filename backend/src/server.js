import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import {connectDB} from './utility/dbconnection.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = 5000;

connectDB();

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
    console.log("Server active on port:", PORT)
});