
import { UserStatus } from "../../../generated/prisma/enums";
import { auth } from "../../lib/auth"
import { prisma } from "../../lib/prisma";

interface IRegisteredPayload  {

    name: string;
    email: string;
    password: string;
    contactNumber: string;

}

interface ILogin  {
    email: string;
    password: string;

}

 const patientRegister = async(payload: IRegisteredPayload) => {
    
    const { name, email, password, contactNumber } = payload
    
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
 
     try {
          const patient = await prisma.$transaction(async (tx) => {
         
      const patientTx =   await tx.patient.create({
             data: {
                 userId: data.user.id,
                 name: payload.name,
                email: payload.email,
               
             }
         })

         return  patientTx
         
     })
     
     return {
         ...data,
         patient
    }
        
     }
     catch (error) {
         console.error("Error creating patient:", error);

         await prisma.user.delete({
             where: {
                 id: data.user.id
             }
         })

         throw error;
     }

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