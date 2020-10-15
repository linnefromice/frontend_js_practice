import React, { useState } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

const todoListState = atom({
  key: "todoListState",
  default: [],
});

let id = 1;
const getId = () => id++;
const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };
  const onChange = ({ target: { value } }) => setInputValue(value);

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};
const TodoList = () => {
  const todoList = useRecoilValue(todoListState);
  return (
    <>
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <div>
          <div>{todoItem.id}</div>
          <span>
            {todoItem.text} / {todoItem.isComplete.toString()}
          </span>
        </div>
      ))}
    </>
  );
};

export default TodoList;
