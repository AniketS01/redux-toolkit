import React from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../reducer/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <form class="w-full max-w-sm">
        {todos.map((todo) => (
          <div class="flex items-center border-b border-teal-500 py-2">
            <p>{todo.text}</p>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
            >
              Delete
            </button>
          </div>
        ))}
      </form>
    </div>
  );
}

export default Todo;
