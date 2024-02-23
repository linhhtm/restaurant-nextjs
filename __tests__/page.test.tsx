import { render, screen } from "@testing-library/react";
import Page from "../app/page";
import { ICategory } from "types";
import { categories, recipes } from "app/api/mockData";

// async function resolvedComponent(Component: any, props: any) {
//   const ComponentResolved = await Component(props)
//   return () => ComponentResolved
// }

jest.mock("../src/service/index.ts", () => ({
  getCategoryList: jest.fn().mockImplementation(() => {
    return Promise.resolve(categories);
  }),
  getBlogPopular: jest.fn(),
  getBlogRecent: jest.fn(),
  getRecipeListByCategory: jest
    .fn()
    .mockImplementation((strCategory: ICategory["strCategory"]) => {
      return Promise.resolve(recipes);
    }),
}));

jest.mock('next/navigation', () => ({
  ...(jest.requireActual('next/navigation') as object),
  useRouter: jest.fn(),
  useSearchParams: jest.fn().mockReturnValue({
    get: jest.fn().mockReturnValue({
      s: ''
    }),
  }),
}));


describe("Page", () => {
  it("renders a heading", async () => {
    // render(<Page />)
    render(await Page({ searchParams: { s: "" } }));
    // const HeaderResolved = await resolvedComponent(Page, {
    //   searchParams: 'es',
    // })
    // render(<HeaderResolved />)

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });

});
