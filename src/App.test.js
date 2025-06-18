import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders React To-Do App heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/React To-Do App/i);
  expect(headingElement).toBeInTheDocument();
});
