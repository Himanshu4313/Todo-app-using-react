import { useDispatch } from 'react-redux';
import './App.css';
import AddTodo from './Components/AddTodo/AddToDo';
import TodoList from './Components/ToDoList/ToDoList';
import { bindActionCreators } from 'redux';
import { todoFinished, editTodo, deleteTodo, addTodo } from './actions/todoAction';
function App() {

  const dispatch = useDispatch();
  const action = bindActionCreators({ todoFinished, editTodo, deleteTodo, addTodo }, dispatch);
  return (
    <>
      <AddTodo addTodo={action.addTodo} />
      <TodoList editTodo={action.editTodo} deleteTodo={action.deleteTodo} todoFinished={action.todoFinished} />

    </>
  );
}

export default App;
