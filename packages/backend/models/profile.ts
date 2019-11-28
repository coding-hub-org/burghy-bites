import { string } from "postcss-selector-parser";
import { number, bool } from "prop-types";
import { validateLocaleAndSetLanguage } from "typescript";

const mongooes = require("mongooes");
const profile = new mongooes.Schema({
  Dish: { name: string, price: number, calories: number, isHealthy: bool },
  Venue: { name: string, price: number, dishes: Array<string>(), isOpen: bool },
  User: { name: string, password: string, email: string },
  Recipe: { ingredients: Array<string>() }
});

module.exports = mongooes.model("Profile", profile);
