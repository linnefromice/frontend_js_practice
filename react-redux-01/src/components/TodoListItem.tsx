import React from "react";

type Props = {
  children?: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
};

export const TodoListItem: React.FC<Props> = (props) => {
  return (
    <li>
      {props.children}
      <span
        style={{ fontSize: "2rem", cursor: "pointer" }}
        onClick={props.onClick}
      >
        x
      </span>
    </li>
  );
};
