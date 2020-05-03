import React from "react";
import styled from "styled-components";
const List = styled.li`
  color: white;
  padding: 0;
  text-align: left;
  border: 1px solid red;
  width: 40%;
  padding: 0.5em 1em;
  margin: 1em auto 0;
  font-size: 1.2em;
  @media (max-width: 576px) {
    width: 80%;
    font-size: 1em;
  }
`;
const Remove = styled.button`
  background-color: transparent;
  border: 0;
  color: red;
  font-size: 1.3em;
  padding-left: 0.5em;
  text-align: left;
`;
export const Todo = ({ todo, onRemove }) => {
  const { value, id } = todo;
  return <List>
      <Remove onClick={() => onRemove(id)}>x</Remove>
      {value}
    </List>
};
