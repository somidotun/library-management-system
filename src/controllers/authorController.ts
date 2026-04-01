import { Request, Response, NextFunction } from "express";
import { Authors } from "../models/Author.js";

// get all author
export const allAuthor = async (request: Request, response: Response) => {
  const AuthorArray = await Authors.find();
  response.status(200).json({ author: AuthorArray });
};

// Get single Author by ID
export const getAuthorById = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const singleAuthor = await Authors.findById(request.params.id);
    response.status(200).json(singleAuthor);
  } catch (error) {
    next(error);
  }
};

// Create new Author
export const createAuthor = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const { name, bio } = request.body as {
      name: string;
      bio: string;
    };
    const newAuthor = await Authors.create({ name, bio });
    response.status(201).json(newAuthor);
  } catch (error) {
    next(error);
  }
};

// Update Author (full replacement)
export const updateAuthor = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const { id } = request.params as { id: string };
    const updatedAuthor = await Authors.findByIdAndUpdate(id, request.body, {
      new: true,
    });
    response.status(200).json(updatedAuthor);
  } catch (error) {
    next(error);
  }
};

// Partial update Author
export const patchAuthor = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const { id } = request.params as { id: string };
    const patchedAuthor = await Authors.findByIdAndUpdate(
      id,
      { $set: request.body },
      { new: true },
    );
    response.status(200).json(patchedAuthor);
  } catch (error) {
    next(error);
  }
};

// Delete Author
export const deleteAuthor = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const { id } = request.params as { id: string };
    const result = await Authors.findByIdAndDelete(id);
    response.status(200).json({ message: "data has been deleted", result });
  } catch (error) {
    next(error);
  }
};
