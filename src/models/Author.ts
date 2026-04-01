import { model, Schema } from "mongoose";

const AuthorSchema = new Schema(
  {
    name: { type: String, required: true },
    bio: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const Authors = model("Author", AuthorSchema);
