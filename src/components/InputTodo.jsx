import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClickAdd } = props;

  return (
    <div className="input-area">
      <input
        placeholder="TODOを追加"
        value={todoText}
        onChange={(event) => onChange(event)}
      />
      <button onClick={(event) => onClickAdd(event)}>追加</button>
    </div>
  );
};
