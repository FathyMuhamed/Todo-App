import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "./Components/Input";
import { Todo } from "./Components/Todo";

const Header = styled.header`
  display: block;
  background-color: red;
  color: white;
  font-size: 2.4em;
  font-weight: bold;
  text-align: center;
  padding: 0.5em 0;
`;
const Page = styled.main`
  min-height: 100vh;
  background-color: #000;
  padding: 0;
  margin: 0;
`;
const Lists = styled.ul`
  list-style-type: none;
  margin: 0;
`;

export default function App() {
  const [todos, setTodos] = useState([]);
  const onGetInput = (value) => {
    const id = todos.length ? todos[todos.length - 1]?.id + 1 : 0;
    const newTodoList = [...todos, { id, value }];
    setTodos(newTodoList);
  };
  const removeTodo = (id) => {
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
  };

  return (
    <Page>
      <Header>
        <h2 style={{ margin: "0" }}>Todo App</h2>
        <Input onGetTodo={onGetInput} />
      </Header>

      <Lists>
        {todos.map((todo) => (
          <Todo id={todo.id} todo={todo} onRemove={removeTodo} />
        ))}
      </Lists>
    </Page>
  );
}
