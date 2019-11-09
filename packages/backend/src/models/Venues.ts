import mongoose, { Schema } from "mongoose";
import { bool } from "prop-types";
import { Dish } from "./Dish";
export const UsersSchema = new Schema({
  name: {
    type: String
  },
  dishes: {
    type: [Dish]
  },
  hours: {
    type: TimeRanges
  },
  isOpen: {
    type: bool
  }
});

export const User = mongoose.model("user", UsersSchema);
