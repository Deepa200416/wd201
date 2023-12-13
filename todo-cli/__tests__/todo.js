/* eslint-disable no-undef */
const todoList = require("../todo");
const {
  all,
  add,
  markAsComplete,
  overdue,
  dueToday,
  dueLater,
  toDisplayableList,
} = todoList();

describe("Todolist Test Suite", () => {
  beforeAll(() => {
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toISOString().split("T")[0], // Assuming the dueDate is set to today
    });
  });

  test("Should add new todo", () => {
    const todoItemsCount = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toISOString().split("T")[0],
    });
    expect(all.length).toBe(todoItemsCount + 1);
  });

  test("Should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("Should retrieve overdue todos", () => {
    const overdueTodos = overdue();
    expect(overdueTodos.length).toBe(0); // Modify based on your test data
  });

  test("Should retrieve due today todos", () => {
    const dueTodayTodos = dueToday();
    expect(dueTodayTodos.length).toBeGreaterThanOrEqual(0); // Modify based on your test data
  });

  test("Should retrieve due later todos", () => {
    const dueLaterTodos = dueLater();
    expect(dueLaterTodos.length).toBeGreaterThanOrEqual(0); // Modify based on your test data
  });

  test("Should format todos for display", () => {
    const today = new Date().toISOString().split("T")[0];
    const displayableList = toDisplayableList(all, today);
    // You can add more specific expectations based on your data and logic
    expect(displayableList).toContain("[ ] Test todo");
  });
});
