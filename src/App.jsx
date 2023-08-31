import { useState } from 'react';
import './App.css';
import AddTodo from './Components/AddTodo/AddToDo';
import TodoList from './Components/ToDoList/ToDoList';
import TodoContext from './Contextapi/TodoContext';
function App() {
  const [todoList, setTodoList] = useState([

    { id: 1, todoData: 'todo1', isFinished: false },
    { id: 2, todoData: 'todo2', isFinished: true }
  ])
  return (
    <>
      <TodoContext.Provider value={{ todoList, setTodoList }}>
        <AddTodo />
        <TodoList />
      </TodoContext.Provider>


    </>
  );
}

export default App;
