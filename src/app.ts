import express, { Application, Request, Response } from "express"

const App: Application = express()

const PORT = 5000

App.use(express.json());

App.get("/", (req:Request, res:Response) => {
  
    res.send(`PH Backend server is running on the port : ${PORT}`)

})


export default App;