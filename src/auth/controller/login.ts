/**
 * @author Wilbert Bocanegra Velazquez /  Team core Softengy
 */

import { Request, Response } from "@tinyhttp/app";
import { userSchema } from "../../model/index";
import { ILogin } from "../../interfaces/index";

/**
 * @description variable to compare if exist user
 */
let noExist: boolean = false;

/**
 * @description url /auth/login
 * @param req
 * @param res
 */
const cLogin = async (req: Request, res: Response) => {
  const { email, password }: ILogin = req.body;

  const { isExist, data } = await userSchema.isExist(email);

  if (isExist === noExist) {
    return res.json({
      msg: "User not found",
      code: 404,
      data: {},
    });
  }
  res.json({
    msg: "User found",
    code: 200,
    data,
  });
};

export default cLogin;
