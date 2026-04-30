/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { specialityServices } from "./speciality.service";
import { error } from "node:console";

const createSpeciality = async (req: Request, res: Response) => {

    console.log(req.body)

   try {
        const result = await specialityServices.createSpeciality(req.body);
        res.status(200).json({
            success: true,
            message: "Speciality created successfully",
            data: result
        });
    } catch (error) {
        console.log(error); // টার্মিনালে এরর দেখার জন্য
    }
}

// getAllSpecilities

const getAllSpecilities = async (req: Request, res: Response) => {

    try {
        const result = await specialityServices.getAllSpecialites();
        res.status(201).json({
            success: true,
            message: "Specilities API working is perfectly",
            data:result
        })
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (error:any) {
        console.log(error)
        res.json({
            message: "somethinks is wrong",
            success: false,
            error: error.message
        })
    }
    
}

// getSpecilityByID

const getSpecialityById = async (req: Request, res: Response) => {
    
    try {

        const { id } = req.params
        console.log(id)
        const result = await specialityServices.getSpecialityById(id as string)
        res.status(201).json({
            success: true,
            message: "Specilities API working is fine properly",
            data:result
        })
        
    }
    catch (error:any) {
        console.log(error)
        res.status(401).json({
            success: false,
            message: "Somethinks is wrong",
            error:error.message

        })
    }

}

// deleteSpeciality
const deleteSpecilityById = async (req: Request, res: Response) => {

    try {
        const {id} = req.params
        const result = await specialityServices.deleteSpecialityById(id as string)

        res.status(201).json({
            success: true,
            message: "Specilities API is deleted successfully",
            data:result
        })
        
    }

    catch (error : any) {
         console.log(error)
        res.status(401).json({
            success: false,
            message: "Somethinks is wrong",
            error:error.message

        })
    }
    
}

// updateSpeciality

const updateSpecialities = async (req: Request, res: Response) => {

    const { id } = req.params;
    const updatedData = req.body


    try {
        const result = await specialityServices.updateSpecialitiesById(id as string,updatedData)
        res.status(200).json({
            success: true,
            message: "Speciality updated successfully",
            data: result
        })
    
    }
    catch (error : any) {
         console.log(error)
        res.status(401).json({
            success: false,
            message: "Somethinks is wrong",
            error:error.message

        })
    }


    
}

export const specialityController = {
    createSpeciality,
    getAllSpecilities,
    getSpecialityById,
    deleteSpecilityById,
    updateSpecialities,

}