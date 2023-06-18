import { createTodo } from '@/functions/dbFunctions'
import Link from 'next/link'

const New = () => {
    return <>
        <header className='flex justify-between items-center mb-4'>
            <h1 className='text-2xl'>New Task</h1>
        </header>
        <form action={createTodo} className="flex gap-2 flex-col">
            <input type="text" name="title" className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"/>
            <div className='flex gap-1 justify-end'>
                <Link href="..">Cancel</Link>
                <button type='submit'>Create</button>
            </div>
        </form>
    </>
}

export default New