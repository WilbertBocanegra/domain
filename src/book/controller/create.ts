/**
 * @author Wilbert Bocanegra Velazquez / Team core Softengy
 */

import { Request, Response } from "@tinyhttp/app";
import { bookSchema } from "../../model/index";
import { cvBook } from "../../validator/index";
import { IBook } from "../../interfaces/index";

let isCheck = true;
/**
 * @description method to create a new book
 * @param req
 * @param res
 */
const cBook = async (req: Request, res: Response) => {
  const body: IBook = req.body;

  if (cvBook(body) !== isCheck) {
    return res.json({
      msg: "Incorrect data",
      code: 500,
      data: {},
    });
  }
  try {
    const book = new bookSchema(body);

    await book.save();

    return res.json({
      message: "Book created successfuly",
      code: 200,
      data: {},
    });
  } catch (e) {
    return res.json({
      msg: "Error internal",
      code: 500,
      data: {},
    });
  }
};

export default cBook;
