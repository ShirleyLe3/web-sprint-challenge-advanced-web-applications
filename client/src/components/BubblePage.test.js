import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Fetches data and renders the bubbles", () => {
  // Finish this test
  //   const { getByText } = render(<BubblesPage />);
  //   const linkElement = getByText(/learn react/i);
  //   expect(linkElement).toBeInTheDocument();
});

// test("entering an invalid value shows an error message", () => {
//   const { getByLabelText, getByRole, queryByRole, rerender } = render(
//     <PhoneNumber />
//   );
//   const input = getByLabelText(/favorite number/i);
//   // test component
//   expect(getByRole("alert")).toHaveTextContent(/the number is invalid/i);

//   rerender(<PhoneNumber phoneNumber={"2025550113"} />);

//   expect(queryByRoll("alert")).toBeNull();
// });

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
