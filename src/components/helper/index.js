// local storage
const getUserTasks = (name) => {
  return JSON.parse(localStorage.getItem(name));
};

const addUserName = (name) => {
  localStorage.setItem(name, JSON.stringify([]));
};

const setUserTasks = (user, tasks) => {
  localStorage.setItem(user, JSON.stringify(tasks));
};

export { getUserTasks, addUserName, setUserTasks };
