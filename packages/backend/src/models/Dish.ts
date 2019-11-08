import mongoose, { Schema } from "mongoose";
import { number, bool } from "prop-types";

export const DishesSchema = new Schema({
  name: {
    type: String
  },
  price: {
    type: number
  },
  calories: {
    type: number
  },
  isHealthy: {
    type: bool
  }
});

export const Dish = mongoose.model("user", DishesSchema);
