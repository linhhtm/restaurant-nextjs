import { ICategory, IPaginate, IPost, IRecipe } from "types";
import serviceHandler from "./serviceHandler";

const API = {
  getRecipeList: async (props?: IPaginate) => {
    const { search } = props ?? {};
    const res = await serviceHandler(
      `https://www.themealdb.com/api/json/v1/1/search.php?${
        search ? `s=${search}` : `f=b`
      }`
    );
    return res.meals ? res.meals as IRecipe[] : [];
  },
  getRecipeListByCategory: async (category: string) => {
    const res = await serviceHandler(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    return res.meals ? res.meals : [];
  },
  getCategoryList: async () => {
    const res = await serviceHandler(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    ) as Record<string, ICategory[]>;
    return res.categories ? res.categories : [];
  },
  getRecipeDetail: async (id: IRecipe["idMeal"]) => {
    const data = await serviceHandler(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    return data.status ? {} : data;
  },
  getBlogList: async () => {
    const data = await serviceHandler(`/api/posts`, {
      cache: "no-cache",
    });
    return data.status ? [] : data;
  },
  getBlogDetail: async (id: IPost["id"]) => {
    const data = await serviceHandler(`/api/posts/${id}`);
    return data.status ? {} : data;
  },
  getBlogPopular: async (props?: IPaginate) => {
    const { size } = props ?? {};
    const data = await serviceHandler(`http://localhost:8080/api/posts/popular?size=${size}`);
    return data.status ? [] : data;
  },
  getBlogRecent: async (props?: IPaginate) => {
    const { size } = props ?? {};
    const data = await serviceHandler(`http://localhost:8080/api/posts/recent?size=${size}`);
    return data.status ? [] : data;
  },
};

export default API;
