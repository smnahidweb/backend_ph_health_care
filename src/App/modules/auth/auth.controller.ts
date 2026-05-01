import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { AuthServices } from "./auth.service";
import { success } from "better-auth";

const registerPatient = catchAsync(


    async (req: Request, res: Response) => {
        const payload = req.body;


        const result = await AuthServices.patientRegister(payload);

        res.status(201).json({
            success:true,
            message: "Sign Up Successfully",
            data:result
            
        })

    }


)


export const AuthController = {
    registerPatient
}