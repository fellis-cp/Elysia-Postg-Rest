import { error } from "elysia";
import prisma from "../../db/client";

const getAllBook = async () => {
  try {
    return await prisma.book.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });
  } catch (e) {
    console.error(e);
  }
};

const getBookId = async (id: number) => {
  try {
    const bookId = await prisma.book.findUnique({
      where: { id },
    });
    if (!bookId) {
      throw new Error("books not found");
    }
    return bookId;
  } catch (e) {
    console.error(e);
  }
};

const addBook = async (options: { title: string; content: string }) => {
  try {
    const { title, content } = options;
    return await prisma.book.create({ data: { title, content } });
  } catch (e) {
    console.error(e);
  }
};

const patchBook = async (
  id: number,
  options: { title: string; content: string }
) => {
  try {
    const { title, content } = options;

    return await prisma.book.update({
      where: { id },
      data: {
        ...(title ? { title } : {}),
        ...(content ? { content } : {}),
      },
    });
  } catch (e) {
    console.error(e);
  }
};

const deleteBook = async (options: { id: number }) => {
  try {
    const { id } = options;

    return await prisma.book.delete({ where: { id } });
  } catch (e) {
    console.error(e);
  }
};

export { getAllBook, getBookId, patchBook, deleteBook, addBook };
