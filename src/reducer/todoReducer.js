//todo reducer function
const TodoReducer = (state = [], action) => {
  if (action.type == "add_todo") {
    const todoText = action.payload.todoText;
    return [
      ...state,
      {
        id: state.length + 1,
        todoData: todoText,
        isFinished: false,
      },
    ];
  } else if (action.type == "edit_todo") {
    const todo = action.payload.todo;
    const editText = action.payload.editText;
    const updatedCurrentList = state.map((t) => {
      if (t.id == todo.id) {
        todo.todoData = editText;
      }
      return t;
    });
    return updatedCurrentList;
  } else if (action.type == "delete_todo") {
    const todo = action.payload.todo;
    const updateTodoList = state.filter((t) => t.id != todo.id);
    return updateTodoList;
  } else if (action.type == "isFinished") {
    const isFinished = action.payload.isFinished;
    const todo = action.payload.todo;

    const updatedCurrentList = state.map((t) => {
      if (t.id == todo.id) {
        todo.isFinished = isFinished;
      }
      return t;
    });
    return updatedCurrentList;
  }
  return state;
};
export default TodoReducer;
