/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { envConfig } from "../../config/env";
import { StatusCodes } from "http-status-codes";


export const errorGloablHandling = ((err: any, req: Request, res: Response, next: NextFunction) => {

    if(envConfig.NODE_ENV === "development"){
        console.error("Error:", err);
    }
    
    let statusCode: number = StatusCodes.INTERNAL_SERVER_ERROR;
    let message: string = "An unexpected error occurred. Please try again later.";

    if (err.name === "ValidationError") {
        statusCode = StatusCodes.BAD_REQUEST;
        message = err.message;
    }

    res.status(statusCode).json({
        success: false,
        message: message,
        error : err.message || "Unknown error"

    })

    
})