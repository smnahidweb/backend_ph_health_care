import App from "./app"


const PORT = 5000

const bootstrap = () => {
    
    try {

    App.listen(PORT, () => {
    console.log("Server is running on the : ",PORT)
})
    }
    catch {
        console.log("Something is going wrong, please checkout the code")
    }

}

bootstrap();

















