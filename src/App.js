import "./App.css";
import React, { useState } from "react";
import CheckLogin from "./components/CheckLogin";
import TodoList from "./components/TodoList";

function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  return (
    <div className="main-wrap">
      <div className="container">
        {user ? (
          <TodoList user={user} tasks={tasks} setTasks={setTasks} />
        ) : (
          <CheckLogin setUser={setUser} setTasks={setTasks} />
        )}
      </div>
    </div>
  );
}

export default App;
