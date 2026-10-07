import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the Simple Life page structure", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { level: 1, name: /living the simple life/i })
  ).toBeInTheDocument();
  expect(screen.getByRole("contentinfo")).toBeInTheDocument();
});
