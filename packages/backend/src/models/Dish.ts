import mongoose, { Schema } from "mongoose";
import { Recipe } from './Recipe';
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
<<<<<<< HEAD
  venue: {
    type:String
  },
  imgUrl: {
    type:String
  }
=======
  venue: String
>>>>>>> e3a98a481b8d2fa2958afbfdbc709ac9fdd9707c
});

export const Dish = mongoose.model("dish", DishesSchema);
