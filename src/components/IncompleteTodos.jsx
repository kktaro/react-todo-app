import React from "react";

export const IncompleteTodos = (props) => {
  const style = {
    backgroundColor: "#c6ffe2",
    width: "400px",
    minHeight: "200px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
  };

  const { todos, onClickComplete, onClickDelete } = props;

  return (
    <div style={style}>
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={(event) => onClickComplete(event, index)}>
                完了
              </button>
              <button onClick={(event) => onClickDelete(event, index)}>
                削除
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
