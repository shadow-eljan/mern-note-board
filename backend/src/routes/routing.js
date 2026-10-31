import express from 'express';

const route2 = express.Router();

route2.get("/", getNames);
route2.post("/", createNames);
route2.put("/", editNames);
route2.delete("/", deleteNames);

export default route2;
