import { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/todos");
        setTodos(response.data.todos);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;