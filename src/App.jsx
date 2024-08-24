import { useState } from "react"

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"

import "./App.css"
import TodoSearch from "./TodoSearch.jsx"
import TodoFilter from "./TodoFilter.jsx"
import TodoList from "./TodoList.jsx"
import Todo from "./Todo.jsx"
import TodoForm from "./TodoForm.jsx"
import Alert from "./Alert.jsx"

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Learn React", active: true},
    { id: 2, name: "Learn Vite", active: true},
    { id: 3, name: "Learn JS", active: false },
    { id: 4, name: "Learn HTML", active: false },
    { id: 5, name: "Learn CSS", active: false },
  ])
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("All")
  const [order, setOrder] = useState("Az")

  function addTodo(name) {
    setTodos([...todos, { id: todos.length + 1, name, active: true }])
    Alert.swalToast({}).fire({
      icon: "success",
      title: "Tarefa adicionada com sucesso!",
    })
  }

  function removeTodo(id) {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id)
    setTodos(filteredTodos)
    Alert.swalToast({}).fire({
      icon: "success",
      title: "Tarefa removida com sucesso!",
    })
  }

  function completeTodo(id) {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.active = !todo.active : todo)
    setTodos(newTodos)
    Alert.swalToast({}).fire({
      icon: "success",
      title: "Tarefa concluída com sucesso!",
    })
  }

  return (
   <div className="container my-5 mx-auto py-8 px-auto">
    <header className="text-center mb-4">
      <h1>Todo</h1>
    </header>
    <main className="justify-content-center align-items-center">
      <TodoSearch 
        search={search} 
        setSearch={setSearch} 
      />
      <TodoFilter 
        status={status}
        setStatus={setStatus}
        order={order}
        setOrder={setOrder}
      />
      <TodoList>
        {todos
        .filter(todo => todo.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        .filter(todo => {
          if (status == "All") return true
          else if (status == "Completed") return !todo.active
          else return todo.active
        })
        .sort((t1, t2) => {
          if (order == "Az") return t1.name.localeCompare(t2.name)
          else return t2.name.localeCompare(t1.name)
        })
        .map(todo => {
          return (
            <Todo
              key={todo.id} 
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          )
        })
      }
      </TodoList>
      <TodoForm onSubmit={addTodo} />
    </main>
   </div>
  )
}

export default App
