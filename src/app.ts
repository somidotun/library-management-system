import express from "express";
import dotenv from "dotenv";
import { configureAuthorRoutes } from "./routes/authorRoute.js";
import { configureBookRoutes } from "./routes/BookRoute.js";
import { configurestudentRoutes } from "./routes/studentRoute.js";
import { configureAttendantRoutes } from "./routes/attendantRoute.js";
import connectDB from "./config/database.js";
import { Authors } from "./models/Author.js";
import { Books } from "./models/book.js";
import { Students } from "./models/student.js";
import { Attendants } from "./models/attendant.js";

dotenv.config();
const app = express();

// middleware
app.use(express.json());

connectDB();

// Routes for authors
configureAuthorRoutes(app);

// Routes for books
configureBookRoutes(app);

// Routes for student
configurestudentRoutes(app);

// route for attendants
configureAttendantRoutes(app);

app.get("/api", async (req, res) => {
  try {
    const authors = await Authors.find();
    const books = await Books.find();
    const students = await Students.find();
    const attendants = await Attendants.find();

    res.status(200).json({
      message: "All system data",
      data: {
        authors,
        books,
        students,
        attendants,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching data",
      error,
    });
  }
});
const server = app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
