import { model, Schema } from "mongoose";

const StudentSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    studentId: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  },
);

export const Students = model("Student", StudentSchema);
