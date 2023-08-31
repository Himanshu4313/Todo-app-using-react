import { useState } from "react";

//Todo Component
const Todo = ({todoData , isfinished ,  changeFinished , onDelete , onEdit}) =>{
    const [finished , setFinished] = useState(isfinished);
    const [isEditing , setIsEditing] = useState(false);
    const [newTodoList , SetNewTodoList] = useState(todoData);
    return (
        <>
           <div>
               <input type="checkbox" 
               checked ={finished}
               onChange={(e) => {
               setFinished((e.target.checked))
               changeFinished((e.target.checked));
               }}/>

                {(isEditing) ? <input type="text" 
                        value={newTodoList} 
                        onChange={(e) => SetNewTodoList((e.target.value))}
                 /> : todoData}

               <button onClick={() => {
                    setIsEditing(!isEditing);
                    onEdit(newTodoList);
               }}> {(!isEditing) ? 'Edit' : 'Save'}</button>
               <button onClick={onDelete}> Delete </button>
           </div>
        </>
    );
}
export default Todo;