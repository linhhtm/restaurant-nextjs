import { TabCardGrid } from "components";
import React from "react";
import API from "service";
import { useDispatch, useSelector } from "react-redux";
import {
  getFavoriteListObj,
  getRecipeListByCategory,
  updateRecipeListByCategory,
} from "store/slice/recipe.slice";
import { IRecipe } from "types";
import { PageProps } from ".next/types/app/page";
// import { useSearchParams } from "next/navigation";

const RecipeList = async (props: PageProps) => {
  const searchParams = props.searchParams;
  // const dispatch = useDispatch();
  // const searchParams = useSearchParams() as any;
  // const listData = useSelector(getRecipeListByCategory);
  // const favoriteListObj = useSelector(getFavoriteListObj);
  // const search = searchParams.get("s");

  // useEffect(() => {
  //   (async () => {
  //     const res = await API.getRecipeList({
  //       search,
  //     });
  //     const data = res.meals;
  //     const obj = {};
  //     if (data?.length) {
  //       data.forEach((el: IRecipe) => {
  //         const key = el.strCategory as keyof typeof obj;
  //         const array: IRecipe[] = obj[key] || [];
  //         array.push({
  //           ...el,
  //           liked: !!favoriteListObj[el.idMeal],
  //         });
  //         Object.assign(obj, {
  //           [key]: array,
  //         });
  //       });
  //     }
  //     dispatch(updateRecipeListByCategory(obj));
  //   })();
  // }, [search]);

  const res = await API.getRecipeList({
    search: searchParams.s,
  });
  const recipesByCategories = res.reduce(
    (a, b) => {
      if (!a[b.strCategory]) a[b.strCategory] = [];
      a[b.strCategory].push(b);
      return a;
    },
    {} as Record<IRecipe["strCategory"], IRecipe[]>
  );
  const recipes = Object.keys(recipesByCategories)
    .sort()
    .reduce(
      (r, k) => ((r[k] = recipesByCategories[k]), r),
      {} as Record<IRecipe["strCategory"], IRecipe[]>
    );

  return (
    <TabCardGrid {...props} tabs={recipes} heading="Checkout the recipes" />
  );
};

export default RecipeList;
