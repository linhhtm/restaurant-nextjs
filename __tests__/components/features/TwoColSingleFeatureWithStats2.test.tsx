import { render, screen } from "@testing-library/react";
import Page from "components/features/TwoColSingleFeatureWithStats2";
import StatsIllustrationSrc from "images/stats-illustration.svg";

describe("Page", () => {
  const heading = "You may like";
  it("render heading", () => {
    render(
      <Page
      heading={heading} statistics={null}
      />
    );
    const title = screen.getByText("You may like").innerHTML;
    expect(title).toEqual(heading);
  });
  it("renders empty statistic", async () => {
    const page = await render(<Page heading={heading} statistics={null} />);

    const { container } = page;
    const statistic = container.getElementsByClassName("statistic");
    expect(statistic.length).toBe(3); //render default statistics
  });
  it("renders page with statistics", () => {
    const statistics = [
      {
        key: "People like this",
        value: "228+",
      },
    ];
    const { container } = render(
      <Page
      heading={heading} statistics={statistics}
      />
    );
    expect(container.getElementsByClassName("statistic").length).toBe(
      statistics.length
    );
  });
  it("renders image inside div", async () => {
    const page = await render(<Page imageSrc={StatsIllustrationSrc} heading={heading} imageInsideDiv={true} statistics={null} />);

    const { container } = page;
    const image = container.getElementsByClassName("image-wrap");
    expect(image.length).toBe(1);
    expect(image[0]).toHaveStyle({'background-image': `url("${StatsIllustrationSrc}")`});
  });

});
