/* eslint-disable no-undef */
const todoList = () => {
  all = [];

  const add = (todoItem) => {
    all.push(todoItem);
  };

  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    const today = new Date().toISOString().split("T")[0];

    return all.filter((item) => !item.completed && item.dueDate < today);
  };

  const dueToday = () => {
    const today = new Date().toISOString().split("T")[0];

    return all.filter((item) => item.dueDate === today);
  };

  const dueLater = () => {
    const today = new Date().toISOString().split("T")[0];

    return all.filter((item) => !item.completed && item.dueDate > today);
  };

  const toDisplayableList = (list, today) => {
    return list
      .map((item) => {
        if (!(item.dueDate === today)) {
          return `[ ] ${item.title} ${item.dueDate}`;
        } else {
          return `[${item.completed ? "x" : " "}] ${item.title}`;
        }
      })
      .join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
