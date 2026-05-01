/* eslint-disable @typescript-eslint/no-explicit-any */
import {  Request, Response } from "express";
import { specialityServices } from "./speciality.service";
import { catchAsync } from "../../shared/catchAsync";

const createSpeciality = catchAsync(
    async (req: Request, res: Response) => {
        const result = await specialityServices.createSpeciality(req.body);
        res.status(200).json({
            success: true,
            message: "Speciality created successfully",
            data: result
        })
    }
)




// getAllSpecilities

    const getAllSpecilities = catchAsync(
        async (req: Request, res: Response) => {
            const result = await specialityServices.getAllSpecialites();
            res.status(200).json({
                success: true,
                message: "API Fetching successfully",
                data:result
            })
    }
)
    


// getSpecilityByID

const getSpecialityById = catchAsync(
    async (req: Request, res: Response) => {
        const { id } = req.params
        console.log(id)
        const result = await specialityServices.getSpecialityById(id as string)
        res.status(201).json({
            success: true,
            message: "Specilities API working is fine properly",
            data:result
        })
    }
)

// deleteSpeciality
const deleteSpecilityById = catchAsync(
    async (req: Request, res: Response) => {
        const { id } = req.params
        const result = await specialityServices.deleteSpecialityById(id as string)

        res.status(201).json({
            success: true,
            message: "Specilities API is deleted successfully",
            data: result
        }
        )
    }
    )

// updateSpeciality

const updateSpecialities = catchAsync(
    async (req: Request, res: Response) => {
        const { id } = req.params;
        const updatedData = req.body
        const result = await specialityServices.updateSpecialitiesById(id as string,updatedData)
        res.status(200).json({
            success: true,
            message: "Speciality updated successfully",
            data: result
        })
    }
)

export const specialityController = {
    createSpeciality,
    getAllSpecilities,
    getSpecialityById,
    deleteSpecilityById,
    updateSpecialities,

}