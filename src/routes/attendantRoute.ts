import { Router, Application } from "express";
// import { checkSchema } from "express-validator";
import {
  allAttendants,
  createAttendant,
  getAttendantById,
  updateAttendant,
  patchAttendant,
  deleteAttendant,
} from "../controllers/attendantController.js";
// import { handleValidationErrors } from "../middleware/validation.mjs";
// import { createValidationSchema } from "../utils/validationSchema.mjs";

const router = Router();

// Base route
router.get("/api/Attendants", allAttendants);

// Author routes
router.get("/api/Attendants/:id", getAttendantById);
router.post(
  "/api/Attendants",
  //   checkSchema(createValidationSchema),
  //   handleValidationErrors,
  createAttendant,
);
router.put("/api/Attendants/:id", updateAttendant);
router.patch("/api/Attendants/:id", patchAttendant);
router.delete("/api/Attendants/:id", deleteAttendant);

export const configureAttendantRoutes = (app: Application): void => {
  app.use(router);
};
