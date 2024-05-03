import { useState } from "react";

interface AddTodoFormProps {
    onSubmit: (title: string) => void;
}

export default function AddTodoform ({onSubmit} :AddTodoFormProps ){
    const [input, setInput] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!input.trim()) return;

        onSubmit(input);
        setInput("");
    }

    return(
        <form className="flex" onSubmit={handleSubmit}>
            <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder=" To be done?" 
            className="rounded-s-md bg-transparent grow border text-white border-gray-500 p-2"
            />
            <button type="submit" className="w-16 rounded-e-md bg-gray-500 text-white font-semibold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                <p className="animate-bounce">Add</p>
            </button>
        </form>
    )
}