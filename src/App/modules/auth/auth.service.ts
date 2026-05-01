
import { auth } from "../../lib/auth"

interface IRegisteredPayload  {

    name: string;
    email: string;
    password: string;

}

 const patientRegister = async(payload: IRegisteredPayload) => {
    
    const { name, email, password } = payload
    
    const data = await auth.api.signUpEmail({
        body: {
            name,
            email,
            password,
            isDeleted: false
        }
    })

    if (!data.user) {
         throw new Error("failed to register")
    }


    return data;

}

export const AuthServices = {
    patientRegister
}