// import necessary react testing library helpers here
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

// import the Counter component here
import Counter from "../components/Counter";

// beforeEach(() => {
//   // Render the Counter component here
// });

test("renders counter message", () => {
  render(<Counter />);
  const counterMessage = screen.getByText(/counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test("should render initial count with value of 0", () => {
  render(<Counter />);
  const counterValue = screen.getByTestId("count");
  expect(counterValue).toHaveTextContent("0");
});

test("clicking + increments the count", () => {
  render(<Counter />);
  const incrementButton = screen.getByText("+");
  const counterValue = screen.getByTestId("count");
  fireEvent.click(incrementButton);
  expect(counterValue).toHaveTextContent("1");
});

test("clicking - decrements the count", () => {
  render(<Counter />);
  const decrementButton = screen.getByText("-");
  const counterValue = screen.getByTestId("count");
  fireEvent.click(decrementButton);
  expect(counterValue).toHaveTextContent("-1");
});
