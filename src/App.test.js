import { render } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("should be in the document", () => {
    const { getByText } = render(<App />);
    expect(getByText(/Testapp is mounted!/i)).toBeInTheDocument();
  });
});
