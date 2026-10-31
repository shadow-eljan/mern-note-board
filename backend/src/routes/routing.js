import express from 'express';
import { getNames, createNames, editNames, deleteNames, getNamesByID } from '../controller/NameController.js';
const route2 = express.Router();

route2.get("/", getNames);
route2.get("/:id", getNamesByID);
route2.post("/", createNames);
route2.put("/:id", editNames);
route2.delete("/:id", deleteNames);

export default route2;
