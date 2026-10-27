import express from "express";
import { deleteNote, getNotes, postNotes, updateNote } from '../controller/notesController.js'

const router = express.Router();

router.get("/", getNotes);

router.post("/", postNotes);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;
