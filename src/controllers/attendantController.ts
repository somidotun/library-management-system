import { NextFunction, Request, Response } from "express";
import { Attendants } from "../models/attendant.js";

// get all Attendants
export const allAttendants = async (request: Request, response: Response) => {
  const AttendantsArray = await Attendants.find();
  response.status(200).json({
    Attendants: AttendantsArray,
  });
};

// Get single Attendant by ID
export const getAttendantById = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const { id } = request.params as { id: string };
    const Attendant = await Attendants.findById(id);
    response.status(200).json(Attendant);
  } catch (error) {
    next(error);
  }
};

// Create new attendant
export const createAttendant = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const { name, staffId } = request.body as {
      name: string;
      staffId: string;
    };
    const newattendant = await Attendants.create({
      name,
      staffId,
    });
    response.status(201).json(newattendant);
  } catch (error) {
    next(error);
  }
};

// Update Attendant (full replacement)
export const updateAttendant = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const { id } = request.params as { id: string };
    const updatedAttendant = await Attendants.findByIdAndUpdate(
      id,
      request.body,
      {
        new: true,
      },
    );
    response.status(200).json(updatedAttendant);
  } catch (error) {
    next(error);
  }
};

// Partial update Attendant
export const patchAttendant = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const { id } = request.params as { id: string };
    const patchedAttendant = await Attendants.findByIdAndUpdate(
      id,
      { $set: request.body },
      { new: true },
    );
    response.status(200).json(patchedAttendant);
  } catch (error) {
    next(error);
  }
};

// Delete Attendant
export const deleteAttendant = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const { id } = request.params as { id: string };
    const result = await Attendants.findByIdAndDelete(id);
    response.status(200).json({ message: "data successfully deleted", result });
  } catch (error) {
    next(error);
  }
};
