"use client";
import { TabCardGrid } from "components";
import React, { useEffect } from "react";
import API from "service";
import { useDispatch, useSelector } from "react-redux";
import {
  getFavoriteListObj,
  getRecipeListByCategory,
  updateRecipeListByCategory,
} from "store/slice/recipe.slice";
import { IRecipe } from "types";
import { useSearchParams } from "next/navigation";

const RecipeList = () => {
  const dispatch = useDispatch();
  const searchParams = useSearchParams() as any;
  const listData = useSelector(getRecipeListByCategory);
  const favoriteListObj = useSelector(getFavoriteListObj);
  const search = searchParams.get("s");

  useEffect(() => {
    (async () => {
      const res = await API.getRecipeList({
        search,
      });
      const data = res.meals;
      const obj = {};
      if (data?.length) {
        data.forEach((el: IRecipe) => {
          const key = el.strCategory as keyof typeof obj;
          const array: IRecipe[] = obj[key] || [];
          array.push({
            ...el,
            liked: !!favoriteListObj[el.idMeal],
          });
          Object.assign(obj, {
            [key]: array,
          });
        });
      }
      dispatch(updateRecipeListByCategory(obj));
    })();
  }, [search]);

  return <TabCardGrid tabs={listData} heading="Checkout the recipes" />;
};

export default RecipeList;
