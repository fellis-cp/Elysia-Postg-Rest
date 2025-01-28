import { Elysia, t } from "elysia";
import {
  addBook,
  deleteBook,
  getAllBook,
  getBookId,
  patchBook,
} from "./handler/handler";

const postsRoutes = new Elysia({ prefix: "/posts" })
  .get("/", () => getAllBook())
  .get("/:id", ({ params: { id } }) => getBookId(id), {
    params: t.Object({
      id: t.Numeric(),
    }),
  })
  .post("/", ({ body }) => addBook(body), {
    body: t.Object({
      title: t.String({
        minLength: 3,
        maxLength: 50,
      }),
      content: t.String({
        minLength: 3,
        maxLength: 50,
      }),
    }),
  })
  .patch("/:id", ({ params: { id }, body }) => patchBook(id, body), {
    params: t.Object({
      id: t.Numeric(),
    }),
    body: t.Object(
      {
        title: t.Optional(
          t.String({
            minLength: 3,
            maxLength: 50,
          })
        ),
        content: t.Optional(
          t.String({
            minLength: 3,
            maxLength: 50,
          })
        ),
      },
      {
        minProperties: 1,
      }
    ),
  })
  .delete("/", ({ body }) => deleteBook(body), {
    body: t.Object({
      id: t.Numeric(),
    }),
  });

export default postsRoutes;
