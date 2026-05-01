
import { UserStatus } from "../../../generated/prisma/enums";
import { auth } from "../../lib/auth"

interface IRegisteredPayload  {

    name: string;
    email: string;
    password: string;

}

interface ILogin  {
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


// loginUser
const loginUser = async(payload:ILogin)=>{

    const {email,password} = payload;
    const data = await auth.api.signInEmail({
        body:{
            email,
            password
        }
    })

    if(data.user.status === UserStatus.BLOCKED){
        throw new Error("User Is Blocked by Admin")
    }

    if(data.user.isDeleted || data.user.status === UserStatus.DELETED){
        throw new Error("User Is Blocked by Admin")


    }
    return data;

}

export const AuthServices = {
    patientRegister,
    loginUser
}