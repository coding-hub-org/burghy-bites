import mongoose, { Schema } from "mongoose";
import { bool } from "prop-types";

export const UsersSchema = new Schema({
  name: {
    type: String
  },
  dishes: {
    type: Array<string>()
  },
  hours: {
    type: TimeRanges
  },
  isOpen: {
    type: bool
  }
});

export const User = mongoose.model("user", UsersSchema);
