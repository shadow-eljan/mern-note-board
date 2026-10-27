import express from 'express';

const getNotes = (req, res) => {
    res.status(200).send("You got 1000 notes.")
};

const postNotes = (req, res) =>{
    res.status(201).send("You created a note.")
};

const updateNote = (req, res) =>{
    res.status(200).send("you have updated a note.")
};

const deleteNote = (req, res) =>{
    res.status(200).send("You have deleted a note.")
};

export {getNotes, postNotes, updateNote, deleteNote};