import { act, fireEvent, render, screen } from "@testing-library/react";
import Page from "components/forms/SimpleSubscribeNewsletter";

describe("Page", () => {
  const subscribe = jest.fn();
  render(<Page subscribe={subscribe} />);
  it("renders page and submit button", async () => {
    const input = screen.getByRole("textbox", { name: /newsletter/i });
    expect(input).toBeInTheDocument();
    fireEvent.input(input, {
      value: "linh@gmail.com",
    });

    const button = screen.getByRole("button", { name: /Subscribe Now/i });
    expect(button).toBeInTheDocument();
    await act(async () => {
      fireEvent.click(button);
    });
    expect(subscribe).toHaveBeenCalledTimes(1);
  });
  it("subscribe", () => {});
});
