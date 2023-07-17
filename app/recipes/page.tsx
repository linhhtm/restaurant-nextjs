"use client";
import { TabCardGrid } from "components";
import React, { useEffect } from "react";
import API from "service";
import { useDispatch, useSelector } from "react-redux";
import {
  getRecipeListByCategory,
  updateRecipeListByCategory,
} from "store/slice/recipe.slice";
import { IRecipe } from "types";

const RecipeList = () => {
  const dispatch = useDispatch();
  const listData = useSelector(getRecipeListByCategory);

  useEffect(() => {
    (async () => {
      const res = await API.getRecipeList();
      const data = res.meals;
      const obj = {};
      if (data?.length) {
        data.forEach((el: IRecipe) => {
          const key = el.strCategory as keyof typeof obj;
          const array: IRecipe[] = obj[key] || [];
          array.push(el);
          Object.assign(obj, {
            [key]: array,
          });
        });
      }
      dispatch(updateRecipeListByCategory(obj));
    })();
  }, []);

  return <TabCardGrid tabs={listData} heading="Checkout the recipes" />;
};

export default RecipeList;
