import { Request, Response, NextFunction } from "express";
import { Books } from "../models/book.js";
import mongoose from "mongoose";

Books;
// get all books
export const allBooks = async (request: Request, response: Response) => {
  const BooksArray = await Books.find();
  response.status(200).json({ books: BooksArray });
};

// Get single Book by ID
export const getBookById = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const singleBook = await Books.findById(request.params.id);
    response.status(200).json(singleBook);
  } catch (error) {
    next(error);
  }
};

// Create new Book
export const createBook = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const { title, isbn, authors, status, issuedBy, returnDate, borrowedBy } =
      request.body as {
        title: string;
        isbn: string;
        authors: string[]; // ✅ plain strings, not ObjectId
        status: "IN" | "OUT";
        borrowedBy: string[]; // ✅ plain strings, not ObjectId
        issuedBy: string[]; // ✅ plain strings, not ObjectId
        returnDate: Date | null;
      };

    const newBook = await Books.create({
      title,
      isbn,
      authors,
      status: status?.toUpperCase() as "IN" | "OUT", // ✅ normalize casing
      issuedBy,
      returnDate,
      borrowedBy,
    });

    response.status(201).json(newBook);
  } catch (error) {
    next(error);
  }
};

// Update Book (full replacement)
export const updateBook = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const { id } = request.params as { id: string };
    const updatedBook = await Books.findByIdAndUpdate(id, request.body, {
      new: true,
    });
    response.status(200).json(updatedBook);
  } catch (error) {
    next(error);
  }
};

// Partial update Books
export const patchBook = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const { id } = request.params as { id: string };
    const patchedBooks = await Books.findByIdAndUpdate(
      id,
      { $set: request.body },
      { new: true },
    );
    response.status(200).json(patchedBooks);
  } catch (error) {
    next(error);
  }
};

// Delete Books
export const deleteBook = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const { id } = request.params as { id: string };
    const result = await Books.findByIdAndDelete(id);
    response.status(200).json({ message: "data has been deleted", result });
  } catch (error) {
    next(error);
  }
};

// borrow book
export const borrowBook = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { studentId, staffId, returnDate } = request.body as {
    studentId: string;
    bookId: string;
    staffId: string;
    returnDate: Date;
  };

  const book = await Books.findById(request.params.id);

  if (!book) {
    return response.status(404).json({ message: "Book not found" });
  }

  if (book.status === "OUT") {
    return response
      .status(400)
      .json({ message: "Book is already borrowed out" });
  }

  book.status = "OUT";
  book.borrowedBy = [new mongoose.Types.ObjectId(studentId)];
  book.issuedBy = [new mongoose.Types.ObjectId(staffId)];
  book.returnDate = returnDate;
  await book.save();
  response
    .status(200)
    .json({ message: "the book has successfully been borrrowed", book });
};

// return book
export const returnBook = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { studentId, staffId, returnDate } = request.body as {
    studentId: string;
    bookId: string;
    staffId: string;
    returnDate: Date;
  };

  const book = await Books.findById(request.params.id);

  if (!book) {
    return response.status(404).json({ message: "Book not found" });
  }

  if (book.status === "IN") {
    return response.status(400).json({ message: "Book is in store" });
  }

  book.status = "IN";
  book.borrowedBy = [new mongoose.Types.ObjectId(studentId)];
  book.issuedBy = [new mongoose.Types.ObjectId(staffId)];
  book.returnDate = returnDate;
  await book.save();
  response
    .status(200)
    .json({ message: "the book has successfully been returned", book });
};
