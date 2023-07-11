import { IRecipe } from "types";
import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const sliceName = "recipe";

interface RecipeState {
  favoriteList: IRecipe[];
  list: IRecipe[];
}

const initialState: RecipeState = {
  favoriteList: [],
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
    updateFavoriteList: (state, { payload }) => {
      const favoriteList = state.favoriteList;
      const list = state.list;
      const indexInList = list?.findIndex((el) => el.idMeal === payload.idMeal);
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
    },
  },
});
export const getFavoriteList = (state: any) => state[sliceName].favoriteList;
export const getRecipeList = (state: any) => state[sliceName].list;

export const { updateFavoriteList, updateRecipeList } = slice.actions;

const persistConfig = {
  key: sliceName,
  storage: storage,
};

export default persistReducer(persistConfig, slice.reducer);
