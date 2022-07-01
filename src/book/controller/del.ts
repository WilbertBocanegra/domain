/**
 * @author Wilbert Bocanegra Velazquez / Team core Softengy
 */
import { Request, Response } from "@tinyhttp/app";
import { bookSchema } from "../../model/index";

/**
 * @description method to delete a book with id
 * @param req
 * @param res
 */
const dBook = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await bookSchema.findByIdAndDelete(id);

    return res.json({
      msg: "Book removed successfuly",
      code: 200,
      data: {},
    });
  } catch (e) {
    if (e instanceof Error) {
      return res.json({
        msg: e.message,
        code: 200,
        data: { id },
      });
    }
  }
};

export default dBook;
