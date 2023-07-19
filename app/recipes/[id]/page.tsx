import { VerticalWithAlternateImageAndText } from "components";
import React from "react";
import API from "service";
import { IRecipe } from "types";

const RecipeDetail = async ({
  params,
}: {
  params: { id: IRecipe["idMeal"] };
}) => {
  const recipes = await API.getRecipeDetail(params.id);
  const posts = await API.getBlogPopular({ size: 3 });
  return (
    <VerticalWithAlternateImageAndText
      data={recipes.meals?.[0]}
      posts={posts}
    />
  );
};

export default RecipeDetail;
