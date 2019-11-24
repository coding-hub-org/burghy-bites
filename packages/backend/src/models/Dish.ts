import mongoose, { Schema } from "mongoose";

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
  recipe: [String],
  venue: {
    type:String
  },
  imgUrl: {
    type:String
  }
});

export const Dish = mongoose.model("dish", DishesSchema);
