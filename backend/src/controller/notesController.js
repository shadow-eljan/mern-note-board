import express from 'express';
import Note from '../models/Note.js'
const getNotes = async (req, res) => {
    try{
        const notes = await Note.find().sort({createdAt:-1});
        res.status(200).json(notes);
    }catch (error){
        console.log("error in getallNotes")
        res.status(404).error({message: error})
    }
};

const getNotesByID = async (req,res) =>{
    try{
        const id = req.params.id;
        const findNote = await Note.findById(id);
        if(!findNote) return res.status(404).json({message: "Notes not found."});
        res.status(200).json(findNote);
    }catch(error){
        res.status(500).json({message:"Internal server error."})
    }
};

const createNote = async (req, res) =>{
    try{
        const {title, content} = req.body;
        const newNote = new Note({
            title: title,
            content: content
        })
        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    }catch(error){
        res.status(400).send({message:"Failed to create note."})
    }
};

const updateNote = async (req, res) =>{
    try{
        const id = req.params.id;
        const {title, content} = req.body; 
        const findNote = await Note.findByIdAndUpdate(id, {title, content},{new:true});
        if(!findNote){
            return res.status(404).send("Note not found.")
        }
        res.status(200).json(findNote);
    }catch(error){
        res.status(500).send({message: "Something went wrong."})
    }
};

const deleteNote = async (req, res) =>{
    try{
        const id = req.params.id;
        const deleteNote = await Note.findByIdAndDelete(id);
        if(!deleteNote) return res.status(404).json({message:"Note not found."});
        res.status(200).send({message: "Note Deleted Successfully."} );
    }catch(error){
        res.status(500).json({message: "Something went wrong."});
    }
};

export {getNotes, getNotesByID, createNote, updateNote, deleteNote};