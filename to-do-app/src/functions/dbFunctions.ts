import { prisma } from "@/db"
import { redirect } from "next/navigation"
export const getTodos = async () => {
    const todos = await prisma.todo.findMany()
    return todos
}

export const createTodo =async (data:FormData) => {
    "use server"
    const title = data.get("title")?.valueOf()

    if( typeof title !== "string" || title.length == 0) throw new Error("Invalid Title.") 

    await prisma.todo.create({ data: { title, complete : false}})
    redirect("/")
}

export const toggleTodo =async (id:string, complete: boolean) => {
    "use server"
    // console.log("id and complete SERVER:",id,complete)
    await prisma.todo.update({where: {id}, data: {complete}})
}