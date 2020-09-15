import React, { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store";
import { addTodoAction, deleteTodoAction } from "../store/todo/actions";
import { TodoListItem } from "./TodoListItem";

export const TodoForm: React.FC = () => {
  const todoList = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();
  const inputForm = useRef<HTMLInputElement | null>(null);
  const [inputTodo, setInputTodo] = useState("");
  const handleInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setInputTodo(event.target.value);
    },
    []
  );
  const clearInput = () => {
    if (inputForm.current !== null) {
      inputForm.current.value = "";
      setInputTodo("");
    }
  };
  const handleAdd = () => {
    dispatch(addTodoAction(inputTodo));
    clearInput();
  };

  return (
    <>
      <h1>TODO</h1>
      <input ref={inputForm} onChange={handleInput}></input>
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todoList.map((item) => (
          <TodoListItem
            key={item.id}
            onClick={() => dispatch(deleteTodoAction(item.id))}
          >
            {item.text}
          </TodoListItem>
        ))}
      </ul>
    </>
  );
};
