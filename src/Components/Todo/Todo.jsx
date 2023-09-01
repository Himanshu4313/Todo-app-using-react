import { useState } from "react";
import './Todo.css';
//Todo Component
const Todo = ({ todoData, isfinished, changeFinished, onDelete, onEdit }) => {
    const [finished, setFinished] = useState(isfinished);
    const [isEditing, setIsEditing] = useState(false);
    const [newTodoList, SetNewTodoList] = useState(todoData);
    return (
        <>
            <div className="todo-container">
                <div id="checkbox">
                    <input type="checkbox"
                        checked={finished}
                        onChange={(e) => {
                            setFinished((e.target.checked))
                            changeFinished((e.target.checked));
                        }} 
                        id="check"
                        />

                        
                <div id="todo-text-box">
                    {(isEditing) ? <input type="text"
                        value={newTodoList}
                        onChange={(e) => SetNewTodoList((e.target.value))}
                    /> : todoData}


                </div>

                </div>


                <div id="editingbtn">

                    <button onClick={() => {
                        setIsEditing(!isEditing);
                        onEdit(newTodoList);
                    }}> {(!isEditing) ? 'Edit' : 'Save'}</button>

                </div>
                <div id="deletebtn">
                    <button onClick={onDelete}> Delete </button>
                </div>


            </div>
        </>
    );
}
export default Todo;