import mongoose, { Schema } from "mongoose";
import { Dish } from "./Dish";
export const VenuesSchema = new Schema({
  name: {
    type: String
  },
  dishes: {
    type: [Dish]
  },
  hours: {
    type: String
  },
  isOpen: {
    type: Boolean
  }
});

export const Venue = mongoose.model("venue", VenuesSchema);
