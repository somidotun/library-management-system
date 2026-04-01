import { Router, Application } from "express";
import {
  getStudentById,
  createStudent,
  updateStudent,
  patchStudent,
  deleteStudent,
  allStudents,
} from "../controllers/studentController.js";

const router = Router();

// Base route
router.get("/api/students", allStudents);

// student routes
router.get("/api/students/:id", getStudentById);
router.post(
  "/api/students",
  //   checkSchema(createValidationSchema),
  //   handleValidationErrors,
  createStudent,
);
router.put("/api/students/:id", updateStudent);
router.patch("/api/students/:id", patchStudent);
router.delete("/api/students/:id", deleteStudent);

export const configurestudentRoutes = (app: Application): void => {
  app.use(router);
};
