

import { Gender } from "../../../generated/prisma/enums";

export interface IcreateDoctorPayload{

    password: string;
    doctor: {
        name: string;
        email: string;
        profilePicture?: string;
        contactNumber?: string;
        address?: string;
        registrationNumber?: string;
        experience?: number;
        gender: Gender
        qualification?: string;
        currentWorkplace?: string;
        designation?: string;
    }
    specialityIds: string[];

}