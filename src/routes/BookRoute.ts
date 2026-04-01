import { Router, Application } from "express";
import {
  getBookById,
  createBook,
  updateBook,
  patchBook,
  deleteBook,
  allBooks,
  borrowBook,
  returnBook,
} from "../controllers/BookController.js";

const router = Router();

// Base route
router.get("/api/books", allBooks);

// Book routes
router.get("/api/books/:id", getBookById);
router.post(
  "/api/Books",
  //   checkSchema(createValidationSchema),
  //   handleValidationErrors,
  createBook,
);
router.put("/api/books/:id", updateBook);
router.patch("/api/books/:id", patchBook);
router.delete("/api/books/:id", deleteBook);
router.post("/api/books/:id/borrow", borrowBook);
router.post("/api/books/:id/return", returnBook);

export const configureBookRoutes = (app: Application): void => {
  app.use(router);
};
