// src/api.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getItems = async () => {
  return prisma.item.findMany();
};

export const createItem = async (data) => {
  return prisma.item.create({ data });
};
