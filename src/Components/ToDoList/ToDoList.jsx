import { useSelector } from "react-redux";
import Todo from "../Todo/Todo";
import './TodoList.css';
//todoList Component
const TodoList = ({ editTodo, deleteTodo, todoFinished }) => {

  // This is way to invoke dispatch methods from store.js file. 
  // const dispatch = useDispatch();
  // This is way to invoke todo list from store.js file.
  const list = useSelector((state) => state.todo);

  const onFinished = (isfinished, todo) => {
    todoFinished(isfinished, todo);
  }

  const onDelete = (todo) => {
    deleteTodo(todo);
  }

  const onEdit = (todo, EditText) => {
    editTodo(todo, EditText);

  }

  return (
    <>
      <div className="todo-list-container">
        {
          list.length > 0 &&
          list.map((todo) =>
            <Todo
              key={todo.id}
              todoData={todo.todoData}
              isfinished={todo.isFinished}
              //onFinished Function
              changeFinished={(isfinished) => { onFinished(isfinished, todo) }}
              //onDelete function
              onDelete={() => { onDelete(todo) }}
              //On Editing function 
              onEdit={(EditText) => { onEdit(todo, EditText) }}
            />)
        }
      </div>

    </>
  );
}
export default TodoList;