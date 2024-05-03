import { Trash2 } from "lucide-react";
import { Todo } from "../types/todo";

interface TodoItemProps{
    todo: Todo;
    onCompletedChange:(id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}
export default function TodoItem({todo, onCompletedChange, onDelete }: TodoItemProps){
    return(
        <div className="flex">
            <label className="flex items-center gap-2 rounded-md 
            p-2
            text-white
            bg-gray-600
            hover:bg-gray-400
            grow">
                <input type="checkbox" 
                checked={todo.completed}
                onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
                className="mx-2 my-2 bg-gray-400"/>
                <span className={todo.completed ? 'line-through text-gray-400': ''}>
                    {todo.title}
                </span>
            </label>
            <button
            onClick={() => onDelete(todo.id)} className="p-2">  
            <Trash2 size={20} className="cursor: pointer; fill-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"/>
            </button>
         </div>
    );
}