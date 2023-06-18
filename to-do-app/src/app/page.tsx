import { prisma } from '@/db'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const todos = await prisma.todo.findMany()
  return <>
    <header className='flex justify-between items-center mb-4'>
      <h1 className='text-2xl'>To-Dos</h1>
      <Link className='border border-slate-300 text-slate-300 px-2 rounded 
        hover:bg-slate-700 focus-within:bg-slate-700 outline-none
      ' href={"/new"}>New</Link>
    </header>  
    <ul className='pl-4'>
      {todos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  </>
}
