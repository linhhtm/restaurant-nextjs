"use client";
import { VerticalWithAlternateImageAndText } from "components";
import React, { useEffect, useState } from "react";
import API from "service";
import { IRecipe } from "types";

const RecipeDetail = ({ params }: { params: { id: IRecipe["idMeal"] } }) => {
  const [data, setData] = useState([]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      const recipes = await API.getRecipeDetail(params.id);
      const posts = await API.getBlogPopular({ size: 3 });
      setData(recipes.meals?.[0]);
      setPosts(posts);
    })();
  }, []);
  return <VerticalWithAlternateImageAndText data={data} posts={posts} />;
};

export default RecipeDetail;
