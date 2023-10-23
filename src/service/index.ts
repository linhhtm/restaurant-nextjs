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
    return data.status ? {} : data;
  },
  getRecipeDetail: async (id: IRecipe["idMeal"]) => {
    const data = await serviceHandler(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    return data.status ? {} : data;
  },
  getBlogList: async (req: any) => {
    const data = await serviceHandler(
      `/api/posts?${new URLSearchParams(req)}`
    );
    return data.status ? [] : data;
  },
  getBlogDetail: async (id: IPost["id"]) => {
    const data = await serviceHandler(`/api/posts/${id}`);
    return data.status ? {} : data;
  },
  getBlogPopular: async (props?: IPaginate) => {
    const { size } = props ?? {};
    const data = await serviceHandler(
      `/api/posts/popular?size=${size}`
    );
    return data.status ? [] : data;
  },
  getBlogRecent: async (props?: IPaginate) => {
    const { size } = props ?? {};
    const data = await serviceHandler(
      `/api/posts/recent?size=${size}`
    );
    return data.status ? [] : data;
  },
};

export default API;
