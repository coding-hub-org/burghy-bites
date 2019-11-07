import mongoose, { Schema } from "mongoose";
import { number, bool } from "prop-types";

export const UsersSchema = new Schema({
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

export const User = mongoose.model("user", UsersSchema);
