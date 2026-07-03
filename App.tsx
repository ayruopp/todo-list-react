import { useState } from 'react'
import './App.css'

interface Todo {
  id: number
  text: string
  done: boolean
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState('')

  const addTodo = () => {
    if (input.trim() === '') return
    setTodos([...todos, { id: Date.now(), text: input, done: false }])
    setInput('')
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  return (
    <div className="app">
      <h1>لیست کارها</h1>
      <div className="input-row">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="کار جدید..."
        />
        <button onClick={addTodo}>افزودن</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className={todo.done ? 'done' : ''}>
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>حذف</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App