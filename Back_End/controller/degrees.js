import express from 'express';
import mongoose from 'mongoose';
import DegreesData from '../models/degreesData.js';

const router = express.Router();

export const getDegrees  = async (req, res)=>{
    try {
        const degreesData = await DegreesData.find();

        res.status(200).json(degreesData);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createDegree = async (req,res)=>{
    const degree = req.body;

    const newDegree = new DegreesData(degree);

    try {
        await newDegree.save();

        res.status(201).json(newDegree);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const updateDegree = async (req,res)=>{
    const { id: _id } = req.params;
    const degree = req.body;
    
    if(!mongoose.Types.ObjectId.isValid(_id))return res.status(404).send('No id with that degree');

    const updateDegree = await DegreesData.findByIdAndUpdate(_id,{ ...degree , _id }, { new : true });

    res.json(updateDegree);
}

export const deleteDegree = async (req,res)=>{
    const { id: _id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id))return res.status(404).send('No id with that degree');
    
    await DegreesData.findByIdAndRemove(_id);

    res.json({message: 'degree deleted successfully'})
}