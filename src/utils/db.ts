/**
 * @author Wilbert Bocanegra Velazquez /  Team core Softengy
 */

import mongoose from "mongoose";

/**
 * @description database connect config
 * @param {string} name - name of the database
 */
const connection = (name: string): void => {
  mongoose.connect(`mongodb://localhost:27017/${name}`);
};

export default connection;
