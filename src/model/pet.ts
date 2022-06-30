/**
 * @author Wilbert Bocanegra Velazquez /  Team core Softengy
 */

import mongoose from "mongoose";

export interface IPet {
  name: string;
  type: string;
  age: number;
}

const petSchema = new mongoose.Schema<IPet>({
  name: String,
  type: String,
  age: Number,
});

export default mongoose.model("Pet", petSchema);
