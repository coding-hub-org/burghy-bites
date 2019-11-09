import mongoose, { Schema } from "mongoose";
import { Dish } from "./Dish";
export const UsersSchema = new Schema({
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

export const User = mongoose.model("user", UsersSchema);
