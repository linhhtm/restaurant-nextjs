import { render, screen } from "@testing-library/react";
import { posts } from "app/api/mockData";
import Page from "components/blogs/ThreeColSimpleWithImage";

describe("Page", () => {
  it("renders posts", () => {
    render(<Page data={posts} />)

    const title = screen.getAllByText("How to make Kimchi")[0];
    expect(title).toBeInTheDocument();
  });

});
