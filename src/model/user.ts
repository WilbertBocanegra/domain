/**
 * @author Wilbert Bocanegra Velazquez /  Team core Softengy
 */

import mongoose from "mongoose";
import { UserEnum } from "../enum/index";

/**
 * @interface typing user model
 */
export interface IUser {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

interface IResponseIsExist {
  isExist: UserEnum;
  data?: IUser;
}

/**
 * @interface interface to ADD model callbacks
 */
interface IUserModel extends mongoose.Model<IUser> {
  isExist(email: string): Promise<IResponseIsExist>;
}

/**
 * @description mongoose Schema
 */
const userSchema = new mongoose.Schema<IUser, IUserModel>({
  name: String,
  lastName: String,
  email: String,
  password: String,
});

/**
 * @description method to get user exist
 * @param {string} email
 * @returns {Promise<boolean>}
 */
userSchema.statics.isExist = async function isExist(
  email: string
): Promise<IResponseIsExist> {
  const isExist = await this.findOne({ email });

  if (!isExist) {
    return {
      isExist: UserEnum.noExist,
    };
  }
  return {
    isExist: UserEnum.isExist,
    data: isExist,
  };
};

/**
 * @exports {mongoose.model}
 */
export default mongoose.model<IUser, IUserModel>("User", userSchema);
