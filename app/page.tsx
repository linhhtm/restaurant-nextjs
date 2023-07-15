"use client";
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
import { useAppDispatch } from "store/hook";
import { updateRecipeListByCategory } from "store/slice";
import { IRecipe } from "types";

const Subheading = `tracking-wider text-sm font-medium`;
const HighlightedText = `bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
const imageCss = `rounded-4xl`;

const App = () => {
  const dispatch = useAppDispatch();
  const [post, setPost] = useState({
    popularPosts: [],
    recentPosts: [],
  });

  useLayoutEffect(() => {
    (async () => {
      Promise.all([
        API.getBlogPopular({ size: 2 }),
        API.getBlogRecent({ size: 5 }),
      ]).then((values) => {
        setPost({
          popularPosts: values[0],
          recentPosts: values[1],
        });
      });

      const res = await API.getRecipeList();
      const data = res.meals;
      const obj = {};
      if (data?.length) {
        data.forEach((el: IRecipe) => {
          const key = el.strCategory as keyof typeof obj;
          const array: IRecipe[] = obj[key] || [];
          array.push(el);
          Object.assign(obj, {
            [key]: array,
          });
        });
      }
      dispatch(updateRecipeListByCategory(obj));
    })();
  }, []);

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
        subheading={<span className={Subheading}>A Reputed Brand</span>}
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
        recentPosts={post.recentPosts}
        popularPosts={post.popularPosts}
      />
    </div>
  );
};
export default App;
