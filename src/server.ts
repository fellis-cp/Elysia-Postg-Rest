import { Elysia } from "elysia";

import swagger from "@elysiajs/swagger";
import postsRoutes from "./route/routes";

const app = new Elysia();

app.use(swagger());
app.group("/api", (app) => app.use(postsRoutes));
app.listen(process.env.PORT || 3500);

console.log(
  `ely sedang berjalan di  ${app.server?.hostname} :${app.server?.port}`
);
