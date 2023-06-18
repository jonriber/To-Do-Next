import { prisma } from "@/db"
import { redirect } from "next/navigation"
export const getTodos =async () => {
    return prisma.todo.findMany()
}

export const createTodo =async (data:FormData) => {
    "use server"
    const title = data.get("title")?.valueOf()

    if( typeof title !== "string" || title.length == 0) throw new Error("Invalid Title.") 

    await prisma.todo.create({ data: { title, complete : false}})
    redirect("/")
}