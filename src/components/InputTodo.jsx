import React from "react";

export const InputTodo = (props) => {
  const style = {
    backgroundColor: "#c1ffff",
    width: "400px",
    height: "30px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
  };

  const { todoText, onChange, onClickAdd, isError } = props;

  return (
    <div style={style}>
      <input
        disabled={isError}
        placeholder="TODOを追加"
        value={todoText}
        onChange={(event) => onChange(event)}
      />
      <button disabled={isError} onClick={(event) => onClickAdd(event)}>
        追加
      </button>
    </div>
  );
};
