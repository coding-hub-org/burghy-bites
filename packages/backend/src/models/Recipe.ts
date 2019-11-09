import mongoose, { Schema } from "mongoose";
import { number, bool } from "prop-types";

export const recipeSchema = new Schema({
  ingredients: {
    type: Array<string>()
  }
});

export const User = mongoose.model("user", recipeSchema);
