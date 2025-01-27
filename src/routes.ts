import { Elysia } from "elysia";

const postsRoutes = new Elysia({ prefix: "/books" })
  .get("/", () => "get all posts")
  .get("/:id", () => "get post by id")
  .post("/", () => "create post")
  .patch("/:id", () => "update post")
  .delete("/", () => "delete post");

export { postsRoutes };
