import mongoose, { Schema } from "mongoose";

export const ReviewsSchema = new Schema({
  author:{
    type: String
  },
  forDish:{
    type: String
  },
  forVenue:{
    type: String
  },
  content:{
    type: String
  },
  score:{
    type: Number
  }
});

export const Review = mongoose.model("review", ReviewsSchema);
