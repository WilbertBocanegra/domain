/**
 * @author Wilbert Bocanegra Velazquez /  Team core Softengy
 */

import mongoose from "mongoose";

/**
 * @interface - book data
 */
export interface IBook {
  name: string;
  author: string;
  editorial: string;
  age: number;
}

/**
 * @description schema book for db
 */
const bookSchema = new mongoose.Schema<IBook>(
  {
    name: String,
    author: String,
    editorial: String,
    age: Number,
  },
  {
    versionKey: false,
  }
);

/**
 * @exports - export model of Book collection
 */
export default mongoose.model<IBook>("Book", bookSchema);
