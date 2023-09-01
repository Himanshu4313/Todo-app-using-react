import { useContext, useState } from "react";
import DispatchContextapi from "../../Contextapi/DispatchContextapi";
import './AddToDo.css';
//Add todo component
const AddTodo = () => {
  const [inputText, setInputText] = useState('');
  //WE use dispatch from dispatch contextapi and this dispatch context api store only dispatch method.
  const { dispatch } = useContext(DispatchContextapi);
  return (
    <>
      <div className="add-todo-container">
        <div>
          <h1 className="Heading">My Todos</h1>
           <input type="text"
            value={inputText}
            placeholder="add your next todo..."
            onChange={(e) => setInputText(e.target.value)}
            id="Addinputbox"
          />
          <button onClick={() => {
            dispatch({ type: 'add_todo', payload: { todoText: inputText } });
            setInputText('');
          }
          }> Add </button>
        </div>

      </div>
    </>
  );
}
export default AddTodo;