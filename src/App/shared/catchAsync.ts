import { NextFunction, Request, RequestHandler, Response } from "express"

/* eslint-disable @typescript-eslint/no-explicit-any */
export const catchAsync = (fn: RequestHandler) => {
    
    return async (req: Request, res: Response, next: NextFunction) => {
        
        try {

            await fn(req, res, next)
            
        }
        catch (error: any) {
            console.log(error)
            res.json({
                message: "somethinks is wrong",
                success: false,
                error: error.message
            })
        }

    }
}