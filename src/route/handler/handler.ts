import prisma from "../../db/client";

const getAllpost = async () => {
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

export { getAllpost, getBookId };
