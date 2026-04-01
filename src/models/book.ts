import mongoose, { Schema } from "mongoose";

export interface IBook extends Document {
  title: string;
  isbn: string;
  authors: string[]; // Array of ObjectIds
  status: "IN" | "OUT"; // Uppercase enum
  borrowedBy: mongoose.Types.ObjectId[];
  issuedBy: mongoose.Types.ObjectId[];
  returnDate: Date | null;
}

// Book schema
const BookSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Title is required"] },
    isbn: { type: String, required: [true, "ISBN is required"], unique: true },
    authors: [
      {
        type: String,
        required: [true, "At least one author is required"],
        ref: "Author",
      },
    ],
    status: { type: String, enum: ["IN", "OUT"], default: "IN" },
    borrowedBy: [{ type: String, ref: "Student" }],
    issuedBy: [{ type: String, ref: "LibraryAttendant" }],
    returnDate: { type: Date, default: null },
  },
  {
    timestamps: true,
  },
);

export const Books = mongoose.model<IBook>("Book", BookSchema);
