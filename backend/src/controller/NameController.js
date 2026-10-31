import express from 'express';
import Name from '../models/Names';

export const getNames = async (req, res) =>{
    try{
        const getname = await Name.find();
        res.status(200).json(getname);
    }catch(error){
        res.status(404).json({message:"Nothing Found."});
    }
};

export const createNames = async (req,res) => {
    try{
        const {name, age} = req.body;
        const createname = new Name({
            name: name,
            age: age
        });
        const saveName = await createname.save();
        res.status(201).send(`Note created. ${saveName}`);
    }catch(error){
        res.status(500).json({message: "Error creating note."});
    }
};

export const editNames = async (req,res) => {
    try {
        const {name, age} = req.body;
        const update = await Name.findByIdAndUpdate(req.params.id, {name, age}, {new:true});
        res.status(200).json({message: "Info updated."});
    } catch (error) {
        res.status(500).json({message: "Error updating info."});   
    }
};

export const deleteNames = async (req,res) =>{
    try {
        const deletename = await Name.findByIdAndDelete(req.params.id);
        
    } catch (error) {
        
    }
}