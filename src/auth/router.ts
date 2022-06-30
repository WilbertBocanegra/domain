/**
 * @author Wilbert Bocanegra Velazquez /  Team core Softengy
 */

import { App } from "@tinyhttp/app";
import { cLogin, cSignIn } from "./controller/index";

/**
 * @description
 */
const app: App = new App();

/**
 * @description endpoint for sign in
 * @description /auth/login endpoint
 * @description /auth/sign-in endpoint
 */

app.post("/login", cLogin);
app.post("/sign-in", cSignIn);

export default app;
