import { Elysia } from "elysia";
import { serverRoutes } from "./route/routes";

const app = new Elysia();

app.group("/api", (app) => app.use(serverRoutes));
app.listen(process.env.PORT || 3500);

console.log(
  `ely sedang berjalan di  ${app.server?.hostname} :${app.server?.port}`
);
