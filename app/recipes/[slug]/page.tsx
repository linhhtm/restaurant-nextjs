"use client";
import { VerticalWithAlternateImageAndText } from "components";
import React, { useEffect, useState } from "react";
import API from "service";

const RecipeDetail = ({ params }: { params: { slug: string } }) => {
  const [data, setData] = useState([]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      const recipes = await API.getRecipeDetail(params.slug);
      const posts = await API.getBlogPopular({ size: 3 });
      setData(recipes.meals?.[0]);
      setPosts(posts);
    })();
  }, []);
  return <VerticalWithAlternateImageAndText data={data} posts={posts} />;
};

export default RecipeDetail;
