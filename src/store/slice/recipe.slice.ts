import { IRecipe } from "types";
import { createSlice } from "@reduxjs/toolkit";

const sliceName = "recipe";

interface RecipeState {
  favoriteList: IRecipe[];
  favoriteListObj: Record<IRecipe["idMeal"], IRecipe>;
  listByCategory: {};
  list: IRecipe[];
}

const initialState: RecipeState = {
  favoriteList: [],
  favoriteListObj: {},
  listByCategory: {},
  list: [],
};

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    updateRecipeList: (state, { payload }) => {
      payload?.forEach((el: IRecipe) => {
        el.liked = !!state.favoriteListObj[el.idMeal];
      });
      state.list = payload ?? [];
    },
    updateRecipeListByCategory: (state, { payload }) => {
      state.listByCategory = payload ?? {};
    },
    updateFavoriteList: (state, { payload }: { payload: IRecipe }) => {
      const favoriteList = state.favoriteList;
      const favoriteListObj = JSON.parse(
        JSON.stringify(state.favoriteListObj || {})
      );
      const listByCategory = JSON.parse(JSON.stringify(state.listByCategory));
      const list = listByCategory[payload.strCategory];
      const indexInList = list?.findIndex(
        (el: IRecipe) => el.idMeal === payload.idMeal
      );
      const index = favoriteList.findIndex(
        (el) => el.idMeal === payload.idMeal
      );
      if (payload.liked) {
        favoriteList.splice(index, 1);
        if (indexInList > -1) list[indexInList].liked = false;
        favoriteListObj.delete(payload.idMeal);
      } else {
        favoriteList.push({ ...payload, liked: true });
        if (indexInList > -1) list[indexInList].liked = true;
        favoriteListObj[payload.idMeal] = payload;
      }
      state.favoriteListObj = favoriteListObj;
      state.listByCategory = listByCategory;
    },
  },
});
export const getFavoriteList = (state: any) => state[sliceName].favoriteList;
export const getFavoriteListObj = (state: any) =>
  state[sliceName].favoriteListObj;
export const getRecipeListByCategory = (state: any) =>
  state[sliceName].listByCategory;
export const getRecipeList = (state: any) => state[sliceName].list;
export const {
  updateFavoriteList,
  updateRecipeList,
  updateRecipeListByCategory,
} = slice.actions;

export default slice.reducer;
