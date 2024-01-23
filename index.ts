import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  //Prisma Queries

  //   Create an User
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "John Doe",
  //       email: "johnny@gmail.com",
  //     },
  //   });

  //   // Get Users
  const getUsers = await prisma.user.findMany({ include: { article: true } });
  //   console.log(getUsers);

  //   // Create an Article
  //   const article = await prisma.article.create({
  //     data: {
  //       title: "How does Prisma and other ORMs work.?",
  //       body: "This is johns first article about something.",
  //       author: {
  //         connect: {
  //           id: 1,
  //         },
  //       },
  //     },
  //   });

  //   // Get Article
  //   const getArticles = await prisma.article.findMany();
  //   console.log(getArticles);

  //   //   Create User and Article and associate them
  //   const userNarticle = await prisma.user.create({
  //     data: {
  //       name: "Sean Strickland",
  //       email: "seans@gmail.com",
  //       article: {
  //         create: {
  //           title: "Sean's First Article",
  //           body: "So heres the thing guys.",
  //         },
  //       },
  //     },
  //   });
  //   console.log(userNarticle);

  // Create another article

  //   const anotherArticle = await prisma.article.create({
  //     data: {
  //       title: "Cristiano Ronaldo's first article",
  //       body: "This is ronaldos first article must read",
  //       author: { connect: { id: 3 } },
  //     },
  //   });
  //   console.log(anotherArticle);

  // Loop over John Doe's articles
  getUsers.forEach((user) => {
    console.log(`\nUser: ${user.name}, Email: ${user.email}`);
    console.log("\nArticles");
    user.article.forEach((article) => {
      console.log(`- Title: ${article.title} \n - Body: ${article.body}`);
    });
  });

  // Update data
  const updateUser = await prisma.user.update({
    where: { id: 1 },
    data: { email: "johndoe@gmail.com" },
  });

  // Remove data
  const delArticle = await prisma.article.delete({
    where: { id: 2 },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
