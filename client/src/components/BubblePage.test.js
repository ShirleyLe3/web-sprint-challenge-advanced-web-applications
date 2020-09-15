import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Fetches data and renders the bubbles", () => {
  const ;
  // // Act
  const { getAllByTestId, rerender } = render(<BubblesPage bubbles/>);
  expect(linkElement).toBeInTheDocument();
  rerender(<BubblesPage bubbles={colors} />);
  // // Assert
  expect(getAllByTestId(/doggo images/i)).toHaveLength(3);
});

// test("entering an invalid value shows an error message", () => {
//   const { getByLabelText, getByRole, queryByRole, rerender } = render(
//     <PhoneNumber />
//   );

// test("renders user data", async () => {
//   const fakeUser = {
//     name: "Joni Baez",
//     age: "32",
//     address: "123, Charming Avenue"
//   };
//   jest.spyOn(global, "fetch").mockImplementation(() =>
//     Promise.resolve({
//       json: () => Promise.resolve(fakeUser)
//     })
//   );
