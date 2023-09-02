import { useState } from 'react';
import './AddToDo.css';
//Add todo component
const AddTodo = ({ addTodo }) => {
  const [inputText, setInputText] = useState('');
  //WE use dispatch from dispatch contextapi and this dispatch context api store only dispatch method.
  // const dispatch = useDispatch();
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
            addTodo(inputText);
            setInputText('');
          }
          }> Add </button>
        </div>

      </div>
    </>
  );
}
export default AddTodo;