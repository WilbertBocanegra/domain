/**
 * @author Wilbert Bocanegra Velazquez / Team core Softengy
 */
import { Request, Response } from "@tinyhttp/app";
import { IBook } from "../../interfaces/index";
import { bookSchema } from "../../model/index";
import { cvBook } from "../../validator/index";

let isCheck = true;

/**
 * @description method to update a book
 * @param req
 * @param res
 */
const uBook = async (req: Request, res: Response) => {
  const { age, author, editorial, name }: IBook = req.body;
  const { id } = req.params;

  if (cvBook({ age, author, editorial, name }) !== isCheck) {
    return res.json({
      msg: "Validation error",
      code: 500,
      data: {},
    });
  }

  try {
    await bookSchema.findByIdAndUpdate(id, {
      age,
      author,
      editorial,
      name,
    });
    return res.json({
      msg: "Update book successfuly",
      code: 200,
      data: {},
    });
  } catch (e) {
    if (e instanceof Error) {
      return res.json({
        msg: "Internal server error",
        code: 500,
        data: {},
      });
    }
  }
};

export default uBook;
