import './App.css';
import AddTodo from './Components/AddTodo/AddToDo';
import TodoList from './Components/ToDoList/ToDoList';
import TodoContext from './Contextapi/TodoContext';
import DispatchContextapi from './Contextapi/DispatchContextapi';
import { useReducer } from 'react';
import TodoReducer from './reducer/todoReducer';
function App() {
  // const [todoList, setTodoList] = useState([

  //   { id: 1, todoData: 'todo1', isFinished: false },
  //   { id: 2, todoData: 'todo2', isFinished: true }
  // ])
  const [list, dispatch] = useReducer(TodoReducer , [{id : 1 , todoData : 'todo1' , isFinished : true}]);

  return (
    <>
      <TodoContext.Provider value={{list}}>
        <DispatchContextapi.Provider value={{ dispatch }}>
          <AddTodo />
          <TodoList />
        </DispatchContextapi.Provider>

      </TodoContext.Provider>


    </>
  );
}

export default App;
