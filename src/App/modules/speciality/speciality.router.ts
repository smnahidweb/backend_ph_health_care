import { Router } from "express";
import { specialityController } from "./speciality.controller";

const router = Router();

router.post('/', specialityController.createSpeciality)
router.get('/', specialityController.getAllSpecilities)
router.get('/:id', specialityController.getSpecialityById)
router.delete('/:id', specialityController.deleteSpecilityById)
router.patch('/:id', specialityController.updateSpecialities)



export const specilityRoutes = router;