import { prisma } from "@/db"

export const getTodos =async () => {
    return prisma.todo.findMany()
}