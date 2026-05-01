import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { AuthServices } from "./auth.service";

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


// loginUser

const loginUser = catchAsync(

  async(req:Request,res:Response)=>{
       const payload = req.body;
       const result = await AuthServices.loginUser(payload)

       res.status(200).json({
        success:true,
        message:"User Login Successfull",
        data:result
       })

  }

)


export const AuthController = {
    registerPatient,
    loginUser
}