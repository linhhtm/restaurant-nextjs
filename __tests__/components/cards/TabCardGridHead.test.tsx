import { fireEvent, render, screen } from "@testing-library/react";
import { recipes } from "app/api/mockData";
import Page from "components/cards/TabCardGridHead";

jest.mock("next/navigation", () => ({
  ...(jest.requireActual("next/navigation") as object),
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn()
  }),
  useSearchParams: jest.fn().mockReturnValue({
    get: jest.fn().mockReturnValue({
      s: "",
    }),
  }),
}));

describe("Page", () => {
  const heading = "Recipe Page";
  it("render heading", () => {
    render(<Page heading={heading} tabs={{}} />);
    const title = screen.getByText("Recipe Page").innerHTML;
    expect(title).toEqual(heading);
  });
  it("renders empty page", async () => {
    const tabs = {};
    const page = await render(
      <Page
        heading={heading}
        tabs={tabs}
      />
    );

    const { container } = page;
    const title = container.getElementsByClassName("tab-control");
    expect(title.length).toBe(0);
  });
  it("renders page with values", () => {
    const heading = "Recipe Page";
    const tabs = {
      BreakFast: recipes,
      Lunch: []
    };
    const { container } = render(
      <Page
        heading={heading}
        tabs={tabs}
      />
    );
    const tabsKeys = Object.keys(tabs);
    expect(container.getElementsByClassName("tab-control").length).toBe(
      tabsKeys.length
    );

    const title = screen.getByText("BreakFast");
    expect(title).toBeInTheDocument();
    fireEvent.click(title)
    expect(title).toHaveClass('!bg-primary-500')
  });
});
