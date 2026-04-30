import { speciality } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createSpeciality = async (payload: speciality): Promise<speciality> => {
    console.log(payload)
    const speciality = await prisma.speciality.create({
        data: payload
    });
    return speciality;

}

// getAllSpecialities

const getAllSpecialites = async () => {
    
    try {

        const result = await prisma.speciality.findMany()
        return result;

        
    }
    catch (err) {
        console.log(err)
    }

}


//getSpeciliaityById

const getSpecialityById = async(id : string)=> {

    try {
        const result = await prisma.speciality.findUnique({
            where: {
                id
            }
        })
 
        return result

    }
    catch (error) {
        console.log(error)
    }

}

//delete speciality by id

const deleteSpecialityById = async (id: string) => {
    try {

        return await prisma.speciality.delete({
            where: {
                id
            }
        })

        
    }
    catch (error) {
        console.log(error)
    }
}

// updateSpecialities

const updateSpecialitiesById = async (id: string,payload:speciality) => {

    try {
        return await prisma.speciality.update({
            where: {
                id
            },
            data: payload
        })
        
    }
    catch (error) {
        console.log(error)
    }

    
}

export const specialityServices = {
    createSpeciality,
    getAllSpecialites,
    getSpecialityById,
    deleteSpecialityById,
    updateSpecialitiesById
}
