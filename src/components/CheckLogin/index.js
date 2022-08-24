import "./main.css";
import { addUserName, getUserTasks } from "../helper/index";
import Input from "../Input";
import Button from "../Button";

function CheckLogin({ setUser, setTasks }) {
  let userValue = "";

  const handelChange = (e) => {
    userValue = e.target.value;
  };

  const handleClick = () => {
    if (userValue === "" || userValue === null) {
      const guestName = `Guest-${Date.now()}`;
      setUser(guestName);
      addUserName(guestName);
    } else {
      const tasksStorage = getUserTasks(userValue);
      tasksStorage ? setTasks(tasksStorage) : addUserName(userValue);
      setUser(userValue);
    }
  };

  return (
    <div className="todo-form">
      <h2 className="title-h2">Your todo</h2>
      <Input
        className="input-user"
        value={userValue}
        type="text"
        placeholder="What is your name?"
        onChange={handelChange}
      />
      <Button class="btn" text="Search" onClick={handleClick} />
    </div>
  );
}

export default CheckLogin;
