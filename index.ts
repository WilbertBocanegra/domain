/**
 * @description add new author in order
 * @author Wilbert Bocanegra Velazquez / Team core Softengy
 */

import { App } from "@tinyhttp/app";
import { json } from "milliparsec";
import { config } from "./src/utils/index";
import { db } from "./src/utils/index";
import { pet } from "./src/pet/index";
import { book } from "./src/book/index";
import { movie } from "./src/movie/index";
import { auth } from "./src/auth/index";

/**
 *  @description initial app
 */
const app: App = new App({
  onError: (err, req, res) => {
    res.status(500).send({
      message: err.message,
    });
  },
  noMatchHandler: (req, res) => {
    res.status(404).end("Not found :(");
  },
});

/**
 * @description db connection
 * @params {string} name - name of database
 */
db("domain");

/**
 * @description libraries
 */
app.use(json());

/**
 * @description endpoint /auth
 * @description path /auth/index
 */
app.use("/auth", auth);

/**
 * @description endpoint pet
 */
app.use("/pet", pet);

/**
 * @description endpoint book
 */
app.use("/book", book);

/**
 * @description endpoint movie
 */
app.use("/movie", movie);

/**
 * @description server serving
 */
app.listen(config.PORT, () => {
  console.log(`> Listening on ${config.PORT}`);
});
