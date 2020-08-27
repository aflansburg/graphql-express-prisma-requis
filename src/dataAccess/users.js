const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// rough example
module.exports = {
  getAllUsers: async () => await prisma.users.findMany(),
  getUserById: async (id) =>
    await prisma.users.findOne({
      where: {
        id: id,
      },
    }),
};
