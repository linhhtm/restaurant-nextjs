import { IPaginate, IPost, IRecipe } from "types";
import serviceHandler from "./serviceHandler";

const API = {
  getRecipeList: async (props?: IPaginate) => {
    const { search } = props ?? {};
    const data = await serviceHandler(
      `https://www.themealdb.com/api/json/v1/1/search.php?${
        search ? `s=${search}` : `f=b`
      }`
    );
    return data;
  },
  getRecipeDetail: async (id: IRecipe["idMeal"]) => {
    const data = await serviceHandler(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    return data;
  },
  getBlogList: async () => {
    const data = await serviceHandler(`http://localhost:3000/api/posts`);
    return data;
  },
  getBlogDetail: async (id: IPost["id"]) => {
    const data = await serviceHandler(`http://localhost:3000/api/posts/${id}`);
    return data;
  },
  getBlogPopular: async (props?: IPaginate) => {
    const { size } = props ?? {};
    const data = await serviceHandler(
      `http://localhost:3000/api/posts/popular?size=${size}`
    );
    return data;
  },
  getBlogRecent: async (props?: IPaginate) => {
    const { size } = props ?? {};
    const data = await serviceHandler(
      `http://localhost:3000/api/posts/recent?size=${size}`
    );
    return data;
  },
};

export default API;
