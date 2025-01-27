import { Elysia } from "elysia";
import { getAllpost, getBookId } from "./handler/handler";

const serverRoutes = new Elysia({ prefix: "/books" })
  .get("/", getAllpost)
  .get("/:id", ({ params: { id } }) => getBookId(id))
  .post("/", () => "create post")
  .patch("/:id", () => "update post")
  .delete("/", () => "delete post");

export { serverRoutes };
