import TodoItem from "@/components/TodoItem";
import { prisma } from "@/db";
import Link from "next/link";
import { redirect } from "next/navigation";

function getTodos() {
    return prisma.todo.findMany();
}
async function toggleTodo(id: string, complate: boolean) {
    "use server";
    await prisma.todo.update({ where: { id }, data: { complate } });
}

export default async function Home() {
    const todos = await getTodos();

    return (
        <div>
            <header className="flex justify-between mb-4 items-center">
                <h1 className="text-2xl">Todos</h1>
                <Link
                    className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
                    href="/new"
                >
                    New
                </Link>
            </header>
            <ul className="pl-4">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
                ))}
            </ul>
        </div>
    );
}
