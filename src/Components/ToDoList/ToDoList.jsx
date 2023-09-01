import { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../Contextapi/TodoContext";
import DispatchContextapi from "../../Contextapi/DispatchContextapi";
//todoList Component
const TodoList = () => {
  const { list } = useContext(TodoContext);
  const { dispatch } = useContext(DispatchContextapi);
  const onFinished = (isfinished, todo) => {
    dispatch({ type: 'isFinished', payload: { isFinished: isfinished, todo: todo } });
  }

 const onDelete = (todo) => {
    dispatch({ type: 'delete_todo', payload: { todo: todo } })
  }

  const onEdit = (todo, EditText) => {

    dispatch({ type: 'edit_todo', payload: { todo: todo, editText: EditText } });

  }

  return (
    <>
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
    </>
  );
}
export default TodoList;