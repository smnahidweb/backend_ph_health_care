import express, { Application, Request, Response } from "express"
import { prisma } from "./App/lib/prisma";
import { indexRoute } from "./App/routes";

const App: Application = express()

const PORT = 5000

App.use(express.json());

App.use("/api/v1", indexRoute)


App.get("/", async(req:Request, res:Response) => {
  
   res.send("PH Health care server is running successfully")
})

export default App;