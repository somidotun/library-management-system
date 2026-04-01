import { Router, Application } from "express";
// import { checkSchema } from "express-validator";
import {
  getAuthorById,
  createAuthor,
  updateAuthor,
  patchAuthor,
  deleteAuthor,
  allAuthor,
} from "../controllers/authorController.js";
// import { handleValidationErrors } from "../middleware/validation.mjs";
// import { createValidationSchema } from "../utils/validationSchema.mjs";

const router = Router();

// Base route
router.get("/api/authors", allAuthor);

// Author routes
router.get("/api/authors/:id", getAuthorById);
router.post(
  "/api/authors",
  //   checkSchema(createValidationSchema),
  //   handleValidationErrors,
  createAuthor,
);
router.put("/api/authors/:id", updateAuthor);
router.patch("/api/authors/:id", patchAuthor);
router.delete("/api/authors/:id", deleteAuthor);

export const configureAuthorRoutes = (app: Application): void => {
  app.use(router);
};
