"use client";
import { VerticalWithAlternateImageAndText } from "components";
import React, { useEffect, useState } from "react";
import API from "service";
import { IRecipe } from "types";
import { notFound } from "next/navigation";

const RecipeDetail = ({ params }: { params: { id: IRecipe["idMeal"] } }) => {
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      const recipes = await API.getRecipeDetail(params.id);
      const posts = await API.getBlogPopular({ size: 3 });

      setPosts(posts);
      setData(recipes.meals?.[0]);
      if (!recipes.meals?.[0]) return notFound();
    })();
  }, []);

  return (
    <VerticalWithAlternateImageAndText
      data={data}
      posts={posts}
    />
  );
};

export default RecipeDetail;
