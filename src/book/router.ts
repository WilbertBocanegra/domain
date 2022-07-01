/**
 * @author Wilbert Bocanegra Velazquez /  Team core Softengy
 */

import { App } from "@tinyhttp/app";
import { cBook, dBook, fBook, uBook } from "./controller/index";
const app: App = new App();
/**
 * @description endpoint to server
 * @description /book/c  - post
 * @description /book/d/{id}  - delete
 * @description /book/fa - get
 * @description /book/u/{id} -post
 */
app.post("/c", cBook);
app.delete("/d/:id", dBook);
app.get("/fa", fBook);
app.put("/u/:id", uBook);
export default app;
