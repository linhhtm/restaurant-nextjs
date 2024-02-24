import { render, screen } from "@testing-library/react";
import Page from "components/features/TwoColSingleFeatureWithStats";

describe("Page", () => {
  const heading = "You may like";
  it("render heading", () => {
    render(
      <Page
        data={{
          title: heading,
        }}
        posts={[]}
      />
    );
    const title = screen.getByText("You may like").innerHTML;
    expect(title).toEqual(heading);
  });
  it("renders empty posts", async () => {
    const page = await render(
      <Page
        data={{
          title: heading,
        }}
        posts={[]}
      />
    );

    const { container } = page;
    const title = container.getElementsByClassName("column");
    expect(title.length).toBe(0);
  });
  it("renders page with values", () => {
    const statistics = [
      {
        key: "People like this",
        value: Math.floor(Math.random() * 10000) + 1,
      },
    ];
    const { container } = render(
      <Page
        data={{
          title: heading,
        }}
        posts={[]}
      />
    );
    expect(container.getElementsByClassName("statistic").length).toBe(
      statistics.length
    );
  });
});
