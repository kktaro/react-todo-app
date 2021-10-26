import React, { useEffect, useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { ErrorMessage } from "./components/ErrorMessage";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [isError, setIsError] = useState(false);

  const onCahngeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = (event) => {
    if (todoText === "") return;

    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickComplete = (event, index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickDelete = (event, index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickBack = (event, index) => {
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  useEffect(() => {
    setIsError(incompleteTodos.length >= 5);
  }, [incompleteTodos]);

  return (
    <div>
      <InputTodo
        todoText={todoText}
        onChange={onCahngeTodoText}
        onClickAdd={onClickAdd}
        isError={isError}
      />
      {isError && <ErrorMessage />}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </div>
  );
};
