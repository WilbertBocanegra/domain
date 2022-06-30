/**
 * @author Wilbert Bocanegra Velazquez /  Team core Softengy
 */

import mongoose from "mongoose";

/**
 *
 */
export interface IBook {
  name: string;
  author: string;
  editorial: string;
  age: number;
}

/**
 *
 */
const bookSchema = new mongoose.Schema<IBook>({
  name: String,
  author: String,
  editorial: String,
  age: Number,
});

/**
 * @exports - export model of Book collection
 */
export default mongoose.model("Book", bookSchema);
