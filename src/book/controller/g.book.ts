/**
 * @author Wilbert Bocanegra Velazquez / Team core Softengy
 */
import { Request, Response } from "@tinyhttp/app";
import { IBook } from "../../interfaces";
import { bookSchema } from "../../model/index";

/**
 * @description method to get all books
 * @param req
 * @param res
 */
const gBooks = async (req: Request, res: Response) => {
  const books: IBook[] = await bookSchema.find();

  return res.json({
    msg: "Find books successfuly",
    code: 200,
    data: books,
  });
};

export default gBooks;
