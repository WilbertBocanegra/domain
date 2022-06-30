import { Request, Response } from "@tinyhttp/app";
import { IUser } from "../../interfaces/index";
import { userSchema } from "../../model/index";
import { IResponse } from "../../interfaces/index";

const cSignIn = async (req: Request, res: Response) => {
  const { email, lastName, name, password }: IUser = req.body;

  const user = new userSchema({ email, lastName, name, password });

  const save = await user.save();
  console.log(save);
  res.json({ msg: "success", code: 200 });
};

export default cSignIn;
