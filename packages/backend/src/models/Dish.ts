import mongoose, { Schema } from "mongoose";
import { Recipe } from './Recipe';
export const DishesSchema = new Schema({
  name: {
    type: String,
    required: [true, "Dish's name field is required"]
  },
  price: {
    type: Number
  },
  calories: {
    type: Number
  },
  isHealthy: {
    type: Boolean
  },
  recipe: Recipe.schema
  
});

export const Dish = mongoose.model("dish", DishesSchema);
