/**
 * @author Wilbert Bocanegra Velazquez /  Team core Softengy
 */

import { Request, Response } from "@tinyhttp/app";
import { userSchema } from "../../model/index";
import { ILogin } from "../../interfaces/index";

/**
 * @description url /auth/login
 * @param req
 * @param res
 */
const cLogin = async (req: Request, res: Response) => {
  const { email, password }: ILogin = req.body;

  const isExist: boolean = await userSchema.isExist(email);

  console.log("working");
};

export default cLogin;
