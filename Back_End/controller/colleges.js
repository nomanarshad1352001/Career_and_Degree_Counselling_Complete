import express from 'express';
import mongoose from 'mongoose';
import CollegeData from '../models/collegesData.js';

const router = express.Router();

export const getColleges  = async (req, res)=>{
    try {
        const collegesData = await CollegeData.find();

        res.status(200).json(collegesData);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createCollege = async (req,res)=>{
    const college = req.body;

    const newCollege = new CollegeData(college);

    try {
        await newCollege.save();

        res.status(201).json(newCollege);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const updateCollege = async (req,res)=>{
    const { id: _id } = req.params;
    const college = req.body;
    
    if(!mongoose.Types.ObjectId.isValid(_id))return res.status(404).send('No id with that college');

    const updateCollege = await CollegeData.findByIdAndUpdate(_id,{ ...college , _id }, { new : true });

    res.json(updateCollege);
}

export const deleteCollege = async (req,res)=>{
    const { id: _id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id))return res.status(404).send('No id with that college');
    
    await CollegeData.findByIdAndRemove(_id);

    res.json({message: 'College deleted successfully'})
}