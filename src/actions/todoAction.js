const todo_Finished = "isFinished";
const edit_Todo = "edit_todo";
const delete_Todo = "delete_todo";
const add_Todo = "add_todo";
export const todoFinished = (isfinished, todo) => ({
  type: todo_Finished,
  payload: { isFinished: isfinished, todo: todo },
});

export const editTodo = (todo, EditText) => ({
  type: edit_Todo,
  payload: { todo: todo, editText: EditText },
});

export const deleteTodo = (todo) => ({
  type: delete_Todo,
  payload: { todo: todo },
});

export const addTodo = (inputText) => ({
  type: add_Todo,
  payload: { todoText: inputText },
});
