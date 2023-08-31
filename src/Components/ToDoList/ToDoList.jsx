import { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../Contextapi/TodoContext";
//todoList Component
const TodoList = () => {
  const {todoList , setTodoList}= useContext(TodoContext)
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
                        changeFinished = {(isfinished) => {
                           const updatedCurrentList = todoList.map((t) => {
                                 if(t.id == todo.id){
                                     todo.isFinished = isfinished;
                                 }
                                 return t;
                           });
                          setTodoList(updatedCurrentList);
                    } }
                    //onDelete function
                    onDelete = {() => {
                      const updateTodoList = todoList.filter((t) => t.id  != todo.id );
                      setTodoList(updateTodoList);
                    }}
                    //On Editing function 
                        onEdit = { (EditText) => {
                                  const updatedCurrentList = todoList.map((t) => {
                                    if(t.id == todo.id){
                                        todo.todoData = EditText;
                                    }
                                    return t;
                                           });
                            setTodoList(updatedCurrentList);
                        }
                    }
                    />) 
         }
    </>
  );
}
export default TodoList;