import { render, screen, fireEvent } from "@testing-library/react";
import TaskForm from "./TaskForm";

test("calls onAddTask with input text when form is submitted", () => {
  const mockAddTask = jest.fn();

  render(<TaskForm onAddTask={mockAddTask} />);

  const input = screen.getByPlaceholderText("Add a new task...");
  fireEvent.change(input, { target: { value: "New Test Task" } });

  const button = screen.getByText("Add Task");
  fireEvent.click(button);

  expect(mockAddTask).toHaveBeenCalledWith("New Test Task", "medium");
});
