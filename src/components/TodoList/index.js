import "./main.css";
import Title from "../Title";
import Input from "../Input";
import Button from "../Button";
import { setUserTasks } from "../helper";

function TodoList({ user, tasks, setTasks }) {
  let taskValue = "";

  const handelChange = (e) => {
    taskValue = e.target.value;
  };

  const handleClick = () => {
    let newTask = {
      name: taskValue,
      id: tasks.length + 1,
      done: false,
    };
    setTasks([...tasks, newTask]);
    setUserTasks(user, [...tasks, newTask]);
  };

  const handleClickDone = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.done = true;
      }
      return task;
    });
    setTasks(newTasks);
    setUserTasks(user, newTasks);
  };

  const renderTask = (task) => {
    return (
      <li key={task.id} className="task-list__item">
        <p
          className={`task-list__txt ${task.done ? "task-list__txt-done" : ""}`}
        >
          <span className="task-list__id">{task.id}.</span>
          {task.name}
        </p>
        <Button
          class={`btn-done ${task.done ? "hidden" : ""}`}
          text="done"
          onClick={() => handleClickDone(task.id)}
        />
      </li>
    );
  };

  return (
    <div className="todo-list">
      <Title className="title-h1" titleTxt={user} />
      <Input
        className="input-task"
        value={taskValue}
        type="text"
        placeholder="What do you want to do?"
        onChange={handelChange}
      />
      <Button class="btn" text="+" onClick={handleClick} />
      <h3 className="title-h3">Tasks:</h3>
      <ul className="task-list">{tasks.map(renderTask)}</ul>
    </div>
  );
}

export default TodoList;
