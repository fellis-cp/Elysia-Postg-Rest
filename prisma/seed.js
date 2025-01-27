import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

const postsToCreate = [
  {
    id: 1,
    title: "First Post :)",
    content: "The first post made",
  },
  {
    id: 2,
    title: "My Second Post Ever",
    content: "Only my second post, still working on this",
  },
  {
    id: 3,
    title: "One more for good measure",
    content:
      "I don't  write a lot but when I do, we end up with this many posts",
  },
  {
    id: 4,
    title: "Final Post, Thank You",
    content: "This should be enough posts for testing!",
  },
];

const seed = async () => {
  console.log("membuat list");

  for (let i = 0; i < postsToCreate.length; i++) {
    const book = postsToCreate[i];
    console.log("creating books", book);
    await client.book.upsert({
      where: { id: book.id },
      update: book,
      create: book,
    });
  }
};

try {
  await seed();
} catch (E) {
  console.error(E);
} finally {
  client.$disconnect();
  console.log("exiting prisma");
}
