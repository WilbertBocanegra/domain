/**
 * @author Wilbert Bocanegra Velazquez / Team core Softengy
 */
import Validator from "fastest-validator";

const v = new Validator();

/**
 *
 */
const vcBook = {
  name: { type: "string", strict: true },
  author: { type: "string", strict: true },
  editorial: { type: "string", strict: true },
  age: { type: "number", strict: true },
};

const check = v.compile(vcBook);

export default check;
