import React, { useState } from "react";

const styleInput = {
  display: "inline-block",
  width: "250px",
  height: "30px",
  border: "1px solid red",
  margin: " 1em auto ",
  textAlign: "center",
  fontSize: ".4em",
};


export const Input = ({onGetTodo}) => {
  const [todo, setTodo] = useState("");
  return (
    <>
      <input
        style={styleInput}
        type='text'
        onKeyPress={(event) => (event.key === "Enter" ? onGetTodo(todo) : "")}
        placeholder='Add New Todo'
        onChange={(e) => setTodo(e.target.value)}
      />

    </>
  );
};
