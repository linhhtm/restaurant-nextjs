import { prettyDOM, render, screen } from "@testing-library/react";
import Page from "components/features/VerticalWithAlternateImageAndText";

describe("Page", () => {
  const mealName = "Hamburger";
  const data = {
    strMeal: "Hamburger",
    strInstructions: "Lorem",
    strMealThumb: "",
    strIngredient1: "meat",
    strMeasure1: "1kg",
    strIngredient2: "salt",
    strMeasure2: "1 spoon",
  };
  it("render heading", () => {
    render(<Page data={data} />);
    const title = screen.getByText("Hamburger").innerHTML;
    expect(title).toEqual(mealName);
  });
  it("renders ingredients", async () => {
    const page = await render(<Page data={data} />);
    const { container } = page;
    const ingredient = container.getElementsByClassName("ingredient");
    expect(ingredient.length).toBe(2);
  });
});
