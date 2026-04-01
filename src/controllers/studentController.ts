import { NextFunction, Request, Response } from "express";
import { Students } from "../models/student.js";

// get all Students
export const allStudents = async (request: Request, response: Response) => {
  const StudentsArray = await Students.find();
  response.status(200).json({
    Students: StudentsArray,
  });
};

// Get single Student by ID
export const getStudentById = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const { id } = request.params as { id: string };
    const Student = await Students.findById(id);
    response.status(200).json(Student);
  } catch (error) {
    next(error);
  }
};

// Create new student
export const createStudent = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const { name, studentId, email } = request.body as {
      name: string;
      studentId: string;
      email: string;
    };
    const newstudent = await Students.create({
      name,
      studentId,
      email,
    });
    response.status(201).json(newstudent);
  } catch (error) {
    next(error);
  }
};

// Update Student (full replacement)
export const updateStudent = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const { id } = request.params as { id: string };
    const updatedStudent = await Students.findByIdAndUpdate(id, request.body, {
      new: true,
    });
    response.status(200).json(updatedStudent);
  } catch (error) {
    next(error);
  }
};

// Partial update Student
export const patchStudent = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const { id } = request.params as { id: string };
    const patchedStudent = await Students.findByIdAndUpdate(
      id,
      { $set: request.body },
      { new: true },
    );
    response.status(200).json(patchedStudent);
  } catch (error) {
    next(error);
  }
};

// Delete Student
export const deleteStudent = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const { id } = request.params as { id: string };
    const result = await Students.findByIdAndDelete(id);
    response.status(200).json({ message: "data has been deleted", result });
  } catch (error) {
    next(error);
  }
};
