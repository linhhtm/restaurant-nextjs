import { fireEvent, render, screen } from "@testing-library/react";
import Page from "components/forms/SimpleSubscribeNewsletter";

describe("Page", () => {
  const subscribe = jest.fn();
  render(<Page subscribe={subscribe} />);
  it("renders page and submit button", () => {
    const input = screen.getByRole("textbox", { name: /newsletter/i });
    expect(input).toBeInTheDocument();
    fireEvent.input(input, {
      value: 'linh@gmail.com'
    })

    const button = screen.getByRole("button", { name: /Subscribe Now 2/i });
    expect(button).toBeInTheDocument();
    fireEvent.click(button)
    expect(subscribe).toHaveBeenCalledTimes(1)
  });
  it("subscribe", () => {
  
  })
});
