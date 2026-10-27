import express from 'express';

const app = express();
const PORT = 5000;

app.get("/api/notes", (req, res) =>{
    res.status(200).send("you got a note.")
});

app.post("/api/notes", (req, res) =>{
    res.status(201).send("Notes created Successfullt.")
});

app.put("/api/notes:id", (req, res) =>{
    res.status(200).send("Notes updated Successfullt.")
});

app.delete("/api/notes:id", (req, res) =>{
    res.status(200).send("Notes deleted Successfullt.")
});

app.listen(PORT, () => {
    console.log("Server active on port: 5000")
});