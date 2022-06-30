/**
 * @author Wilbert Bocanegra Velazquez /  Team core Softengy
 */

import { App, Request, Response } from "@tinyhttp/app";

const app: App = new App();

app.get("/hola", (req: Request, res: Response) => {
  res.send("hola desde otra ruta");
});

export default app;
