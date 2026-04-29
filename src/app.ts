import express, { Application, Request, Response } from "express"
import { prisma } from "./App/lib/prisma";

const App: Application = express()

const PORT = 5000

App.use(express.json());

App.get("/", async(req:Request, res:Response) => {
  
    const result = await prisma.speciality.create({
        data:{
            title: "cardiology"
        }
    })

    res.status(201).json({
        success:true,
        message:"Created successfully",
        data: result
    })
})


export default App;