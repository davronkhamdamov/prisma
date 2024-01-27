"use client";
type ToDoItemProps = {
    id: string;
    title: string;
    complate: boolean;
    toggleTodo: (id: string, complate: boolean) => void;
};
const TodoItem = ({ id, title, complate, toggleTodo }: ToDoItemProps) => {
    return (
        <li className="flex gap-1 items-center">
            <input
                type="checkbox"
                id={id}
                className="cursor-pointer peer"
                defaultChecked={complate}
                onChange={(e) => toggleTodo(id, e.target.checked)}
            />
            <label
                htmlFor={id}
                className="peer-checked:line-through peer-checked:text-slate-500"
            >
                {title}
            </label>
        </li>
    );
};

export default TodoItem;
