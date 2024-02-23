import { prettyDOM, render, screen } from "@testing-library/react";
import { recipes } from "app/api/mockData";
import Page from "components/cards/TabCardGrid";

jest.mock("next/navigation", () => ({
  ...(jest.requireActual("next/navigation") as object),
  useRouter: jest.fn(),
  useSearchParams: jest.fn().mockReturnValue({
    get: jest.fn().mockReturnValue({
      s: "",
    }),
  }),
}));

describe("Page", () => {
  const heading = "Recipe Page";
  it("render heading", () => {
	render(
		<Page
		  heading={heading}
		  tabs={{}}
		  searchParams={{
			category: "",
		  }}
		/>
	  );
    const title = screen.getByText("Recipe Page").innerHTML;
    expect(title).toEqual(heading);
  });
  it("renders empty page", async () => {
	const tabs = {}
    const page = await render(
		<Page
		  heading={heading}
		  tabs={tabs}
		  searchParams={{
			category: "",
		  }}
		/>
	  );;

    const { container } = page;
    // console.debug(prettyDOM(container.firstChild as Element));
    const title = container.getElementsByClassName("empty");
    expect(title.length).toBe(1);
  });
  it("renders page with values", () => {
    const heading = "Recipe Page";
	const tabs = {
		BreakFast: recipes,
	  }
    const { container } = render(
      <Page
        heading={heading}
        tabs={tabs}
        searchParams={{
          category: "",
        }}
      />
    );
	const tabsKeys = Object.keys(tabs)
    expect(container.getElementsByClassName("tab-content").length).toBe(tabsKeys.length);

    const title = screen.getByText("BreakFast");
    expect(title).toBeInTheDocument();
  });
});
