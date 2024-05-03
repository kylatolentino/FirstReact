import { useEffect, useState } from "react";
import { Todo } from "../types/todo";
import { dummyData } from "../data/todos";


export default function useTodos() {
    const [todos, setTodos] = useState(() => {
        const saveTodos: Todo[] = JSON.parse(
          localStorage.getItem("todos") || "[]"
        );
        return saveTodos.length > 0 ? saveTodos : dummyData;
      }
    )
    
      useEffect(() =>{
        localStorage.setItem("todos", JSON.stringify(todos));
      },[todos])
    
      function setTodoCompleted(id: number, completed: boolean) {
        setTodos((prevTodos) => prevTodos.map(todo => (todo.id === id ? {
          ...todo, completed} : todo))
      );
      }
    
      function addTodo(title: string) {
         setTodos(prevTodos => [
          {
            id: Date.now(),
            title,
            completed:false
          },
          ...prevTodos
         ])
      }
      //delete a todo list
      function deleteTodo(id: number){
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
      }
      //delete all todo check
      function deleteAllCompletedTodos(){
        setTodos(prevTodos => prevTodos.filter(todo => !todo.completed))
      }
      return{
        todos,
        addTodo,
        setTodoCompleted,
        deleteAllCompletedTodos,
        deleteTodo,
      }
}