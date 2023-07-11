import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import recipeSlice from "./slice/recipe.slice";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  recipe: recipeSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
});
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
