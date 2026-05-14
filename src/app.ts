import express, { Application, Request, Response } from "express"
import { prisma } from "./App/lib/prisma";
import { indexRoute } from "./App/routes";
import { error } from "node:console";
import { errorGloablHandling } from "./App/midleware/errorGlobalHandling";
import { notFound } from "./App/midleware/notFound";

const App: Application = express()

const PORT = 5000

App.use(express.json());

App.use("/api/v1", indexRoute)


App.get("/", async(req:Request, res:Response) => {
  
   res.send("PH Health care server is running successfully")
})

App.use(errorGloablHandling)
App.use(notFound)

export default App;