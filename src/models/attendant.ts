import { model, Schema } from "mongoose";

// Attendant
const attendantSchema = new Schema(
  {
    name: { type: String, required: true },
    staffId: { type: String, unique: true, required: true },
  },
  { timestamps: true },
);
export const Attendants = model("Attendant", attendantSchema);
