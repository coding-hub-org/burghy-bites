import mongoose, { Schema } from "mongoose";

export const RecipesSchema = new Schema({
  ingredients: {
    type: [String]
  }
});

export const Recipe = mongoose.model("recipe", RecipesSchema);
