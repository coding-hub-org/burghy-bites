import mongoose, { Schema } from "mongoose";
import { Dish } from "./Dish";
export const VenuesSchema = new Schema({
  name: {
    type: String
  },
<<<<<<< HEAD
=======

>>>>>>> a972c76818d834d9a3bddb6c4d58ca7e32a5a693
  dishes: [Dish.schema],
  hours: {
    type: String
  },
  isOpen: {
    type: Boolean
  }
});

export const Venue = mongoose.model("venue", VenuesSchema);
