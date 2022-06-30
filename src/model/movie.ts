/**
 * @author Wilbert Bocanegra Velazquez /  Team core Softengy
 */

import mongoose from "mongoose";

/**
 * @interface - interface to Movie collection
 */
export interface IMovie {
  name: string;
  author: string;
  duration: number;
  title: string;
}

/**
 * @description - Schema database collection
 */
const movieSchema = new mongoose.Schema<IMovie>({
  name: String,
  author: String,
  duration: Number,
  title: String,
});

/**
 * @exports - export model to collection
 */
export default mongoose.model("Movie", movieSchema);
