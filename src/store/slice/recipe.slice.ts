import { IRecipe } from "types";
import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const sliceName = "recipe";

interface RecipeState {
  favoriteList: IRecipe[];
  listByCategory: {};
  list: IRecipe[];
}

const initialState: RecipeState = {
  favoriteList: [],
  listByCategory: {},
  list: [],
};

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    updateRecipeList: (state, { payload }) => {
      payload?.forEach((el: IRecipe) => {
        if (state.favoriteList.find((fav) => fav.idMeal === el.idMeal)) {
          el.liked = true;
        }
      });
      state.list = payload ?? [];
    },
    updateRecipeListByCategory: (state, { payload }) => {
      state.listByCategory = payload ?? {};
    },
    updateFavoriteList: (state, { payload }: { payload: IRecipe }) => {
      const favoriteList = state.favoriteList;
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
      } else {
        favoriteList.push({ ...payload, liked: true });
        if (indexInList > -1) list[indexInList].liked = true;
      }
      state.listByCategory = listByCategory;
    },
  },
});
export const getFavoriteList = (state: any) => state[sliceName].favoriteList;
export const getRecipeListByCategory = (state: any) =>
  state[sliceName].listByCategory;
export const getRecipeList = (state: any) => state[sliceName].list;

export const {
  updateFavoriteList,
  updateRecipeList,
  updateRecipeListByCategory,
} = slice.actions;

const persistConfig = {
  key: sliceName,
  storage: storage,
};

export default persistReducer(persistConfig, slice.reducer);
