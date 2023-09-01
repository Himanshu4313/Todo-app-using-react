import { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../Contextapi/TodoContext";
//todoList Component
const TodoList = () => {
  const {todoList , setTodoList}= useContext(TodoContext);

 const onFinished = (isfinished , todo) => {
  (isfinished) => {
    const updatedCurrentList = todoList.map((t) => {
          if(t.id == todo.id){
              todo.isFinished = isfinished;
          }
          return t;
    });
   setTodoList(updatedCurrentList);
}
 }

 const onDelete = (todo) => {
             const updateTodoList = todoList.filter((t) => t.id  != todo.id );
             setTodoList(updateTodoList);
 }

const onEdit = (todo , EditText) => {

      const updatedCurrentList = todoList.map((t) => {
        if(t.id == todo.id){
            todo.todoData = EditText;
        }
        return t;
               });
    setTodoList(updatedCurrentList);

}

  return (
    <>
         {
          todoList.length > 0 && 
          todoList.map((todo) => 
               <Todo 
                  key={todo.id}
                   todoData={todo.todoData } 
                    isfinished={todo.isFinished}
                    //onFinished Function
                        changeFinished = {(isfinished) => { onFinished(isfinished , todo)} }
                    //onDelete function
                    onDelete = {() => {onDelete(todo)}}
                    //On Editing function 
                        onEdit = { (EditText) => {onEdit(todo, EditText)} }
                    />) 
         }
    </>
  );
}
export default TodoList;