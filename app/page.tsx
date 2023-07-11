"use client";
import React, { useEffect } from "react";
import {
  TwoColumnWithVideo,
  ThreeColSimple,
  TwoColSingleFeatureWithStats2,
  TabCardGrid,
  PopularAndRecentBlogPosts,
} from "components";
import API from "service";
import { getRecipeList, updateRecipeList } from "store/slice/recipe.slice";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

const Subheading = `tracking-wider text-sm font-medium`;
const HighlightedText = `bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
const imageCss = `rounded-4xl`;

const App = ({ data, recentPosts, popularPosts }: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateRecipeList(data));
  }, [data]);
  const list = useSelector(getRecipeList);
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
        data={list}
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
        imageContainerCss={`p-2!`}
        imageCss={`w-20! h-20!`}
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
        recentPosts={recentPosts}
        popularPosts={popularPosts}
      />
    </div>
  );
};
export default App;

export async function getStaticProps() {
  const data = await API.getRecipeList();
  const popularPosts = await API.getBlogPopular({ size: 2 });
  const recentPosts = await API.getBlogRecent({ size: 5 });

  return {
    props: {
      data: data?.meals,
      recentPosts,
      popularPosts,
    },
  };
}
