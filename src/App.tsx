import AddTodoform from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";


function App() {
  const {
    todos,
    addTodo,
    setTodoCompleted,
    deleteTodo,
    deleteAllCompletedTodos,
  } = useTodos();

  return (
    <main className='py-10 h-screen space-y-5 overflow-y-auto'>
      <h1 className='text-[30px] font-bold text-center mb-5'>Your Todos</h1>
      <div className="max-w-lg mx-auto bg-gray-700 rounded-[12px] p-5 py-5 space-y-6 mb-5">
        <AddTodoform onSubmit={addTodo}/>
        <TodoList
        todos={todos}
        onCompletedChange={setTodoCompleted}
        onDelete={deleteTodo} />
      </div>
      <TodoSummary
      todos={todos}
      deleteAllCompleted={deleteAllCompletedTodos}
      />
    </main>
  )
}

export default App