import './App.css';
import Todos from './components/Todos.tsx/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo/NewTodo.component';
import { useState } from 'react';

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);
  

  return (
    <div className='app-container'>
      <NewTodo setTodos={setTodos} todos={todos}></NewTodo>
      <Todos items={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
