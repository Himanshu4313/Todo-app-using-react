import { useContext, useState } from "react";
import TodoContext from "../../Contextapi/TodoContext";

//Add todo component
const AddTodo = () => {
 const {todoList , setTodoList} =  useContext(TodoContext);
  const [inputText , setInputText] = useState('');
  return (
    <>
         <div>
            <input type="text"
             value={inputText}
             placeholder="add your next todo..."
             onChange={(e) => setInputText(e.target.value)}
             />
            <button onClick={() =>{
               setTodoList(
                  [ 
                        ...todoList , 
                        {
                          id :todoList.length+1 ,
                          todoData: inputText , 
                          isFinished : false
                        } 
                    ]
               )
               setInputText('');
            }
               }> Add </button>
         </div>
    </>
  );
}
export default AddTodo;