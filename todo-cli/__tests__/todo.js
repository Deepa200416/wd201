/* eslint-disable no-undef */
const todoList = require("../todo");

describe("TodoList Test Suite", () => {
  let todo;

  beforeEach(() => {
    todo = todoList();
  });

  test("Creating a new todo", () => {
    const newTodo = { title: "Buy groceries", dueDate: "2023-12-15" };
    todo.add(newTodo);

    expect(todo.all).toEqual([newTodo]);
  });

  test("Marking a todo as completed", () => {
    const newTodo = {
      title: "Finish report",
      dueDate: "2023-12-14",
      completed: false,
    };
    todo.add(newTodo);
    todo.markAsComplete(0);

    expect(todo.all[0].completed).toBe(true);
  });

  test("Retrieval of overdue items", () => {
    const overdueTodo = {
      title: "Pay bills",
      dueDate: "2023-12-12",
      completed: false,
    };
    todo.add(overdueTodo);

    expect(todo.overdue()).toEqual([overdueTodo]);
  });

  test("Retrieval of due today items", () => {
    const dueTodayTodo = {
      title: "Clean room",
      dueDate: "2023-12-13",
      completed: false,
    };
    todo.add(dueTodayTodo);

    expect(todo.dueToday()).toEqual([dueTodayTodo]);
  });

  test("Retrieval of due later items", () => {
    const dueLaterTodo = {
      title: "Call dentist",
      dueDate: "2023-12-14",
      completed: false,
    };
    todo.add(dueLaterTodo);

    expect(todo.dueLater()).toEqual([dueLaterTodo]);
  });
});
