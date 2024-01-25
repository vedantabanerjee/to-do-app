import { useState } from "react";
import axios from "axios";

export function CreateTodo(props) {
  // react-query
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        id="title"
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="title"
        onChange={function (e) {
          const value = e.target.value;
          setTitle(e.target.value);
        }}
      ></input>{" "}
      <br />
      <input
        id="desc"
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="description"
        onChange={function (e) {
          const value = e.target.value;
          setDescription(e.target.value);
        }}
      ></input>{" "}
      <br />
      <button
        style={{
          padding: 10,
          margin: 10,
        }}
        onClick={() => {
          axios
            .post("http://localhost:3000/todo", {
              title: title,
              description: description,
            })
            .then(function (res) {
              alert("Todo added");
            })
            .catch(function (error) {
              console.log(error);
            });
        }}
      >
        Add a todo
      </button>
    </div>
  );
}
