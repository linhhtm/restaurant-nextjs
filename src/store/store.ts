import { configureStore, combineReducers } from "@reduxjs/toolkit";
import recipeSlice from "./slice/recipe.slice";

const reducers = combineReducers({
  recipe: recipeSlice,
});

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== "production",
});
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
