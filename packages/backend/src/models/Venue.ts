import mongoose, { Schema } from "mongoose";
export const VenuesSchema = new Schema({
  name: {
    type: String
  },
  hours: {
    type: String
  },
  isOpen: {
    type: Boolean
  }
});

export const Venue = mongoose.model("venue", VenuesSchema);
