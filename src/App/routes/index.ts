import { Router } from "express";
import { specilityRoutes } from "../modules/speciality/speciality.router";

const router = Router();

router.use("/specialties", specilityRoutes)


export const indexRoute = router;

