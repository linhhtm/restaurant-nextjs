import React, { useLayoutEffect, useState } from "react";
import {
  TwoColumnWithVideo,
  ThreeColSimple,
  TwoColSingleFeatureWithStats2,
  TabCardGrid,
  PopularAndRecentBlogPosts,
} from "components";
import API from "service";
import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "store/hook";
import {
  getFavoriteListObj,
  getRecipeListByCategory,
  updateRecipeListByCategory,
} from "store/slice";
import { ICategory, IRecipe } from "types";
import { PageProps } from ".next/types/app/page";
// import TwoColumnWithVideo from "components/hero/TwoColumnWithVideo";
// import TabCardGrid from "components/cards/TabCardGrid";
// import ThreeColSimple from "components/features/ThreeColSimple";
// import TwoColSingleFeatureWithStats2 from "components/features/TwoColSingleFeatureWithStats2";
// import PopularAndRecentBlogPosts from "components/blogs/PopularAndRecentBlogPosts";

const Subheading = `tracking-wider text-sm font-medium`;
const HighlightedText = `bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
const imageCss = `rounded-4xl`;

const App = async (props: PageProps) => {
  // const dispatch = useAppDispatch();
  // const tabs = useAppSelector(getRecipeListByCategory);
  // const listFavoriteObj = useAppSelector(getFavoriteListObj);

  // useLayoutEffect(() => {
  //   (async () => {
  //     Promise.all([
  //       API.getBlogPopular({ size: 2 }),
  //       API.getBlogRecent({ size: 5 }),
  //     ]).then((values) => {
  //       setPost({
  //         popularPosts: values[0],
  //         recentPosts: values[1],
  //       });
  //     });

  //     const res = await API.getRecipeList();
  //     const data = res.meals;
  //     const obj = {};
  //     if (data?.length) {
  //       data.forEach((el: IRecipe) => {
  //         const key = el.strCategory as keyof typeof obj;
  //         const array: IRecipe[] = obj[key] || [];
  //         array.push({ ...el, liked: !!listFavoriteObj[el.idMeal] });
  //         Object.assign(obj, {
  //           [key]: array,
  //         });
  //       });
  //     }
  //     dispatch(updateRecipeListByCategory(obj));
  //   })();
  // }, []);

  const popularPosts = await API.getBlogPopular({ size: 2 });
  const recentPosts = await API.getBlogRecent({ size: 5 });
  const categories = await API.getCategoryList();

  const recipesByCategory = {} as Record<IRecipe['strCategory'], IRecipe[]>;
  await Promise.all(
    categories.map(async (category) => {
      const recipes = await API.getRecipeListByCategory(category.strCategory);
      Object.assign(recipesByCategory, {
        [category.strCategory]: recipes,
      });
    })
  );
  const recipes = Object.keys(recipesByCategory)
      .sort()
      .reduce((r, k) => ((r[k] = recipesByCategory[k]), r), {} as Record<IRecipe['strCategory'], IRecipe[]>);

  return (
    <div>
      <TwoColumnWithVideo
        heading={
          <>
            Delicious & Affordable{" "}
            <span className={HighlightedText}>Meals Near You.</span>
          </>
        }
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="See Now"
        watchVideoButtonText="Meet The Chefs"
      />
      <TabCardGrid
        tabs={recipes}
        {...props}
        heading={
          <>
            Checkout <span className={HighlightedText}>recipes.</span>
          </>
        }
      />
      <ThreeColSimple
        heading={
          <>
            Amazing <span className={HighlightedText}>Services.</span>
          </>
        }
        cards={[
          {
            imageSrc: "/images/recipe.png",
            title: "230+ Recipes",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://google.com",
          },
          {
            imageSrc: "/images/chef.png",
            title: "Professional Chefs",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://timerse.com",
          },
          {
            imageSrc: "/images/celebration.png",
            title: "Prizes",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://reddit.com",
          },
        ]}
        imageContainerCss={`!p-2`}
        imageCss={`!w-20 !h-20`}
      />
      <TwoColSingleFeatureWithStats2
        subheading={<div className={Subheading}>A Reputed Brand</div>}
        heading={
          <>
            Why <span className={HighlightedText}>HomeKitchen ?</span>
          </>
        }
        statistics={[
          {
            key: "Recipes",
            value: "100000+",
          },
          {
            key: "Users",
            value: "11000+",
          },
          {
            key: "Professional Chefs",
            value: "1500+",
          },
        ]}
        primaryButtonText="Explore"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80"
        imageCss={clsx("bg-cover", imageCss)}
        imageContainerCss={`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
      <PopularAndRecentBlogPosts
        recentPosts={recentPosts}
        popularPosts={popularPosts}
      />
    </div>
  );
};
export default App;
