import React, { useMemo } from "react";
import SvgDotPatternIcon from "images/dot-pattern.svg";
import {
  SectionHeading as HeadingTitle,
  ThreeColSimpleWithImage,
  Container,
} from "components";
import { IIngredient } from "types";
import Image from "next/legacy/image";

const SingleColumn = `max-w-screen-xl mx-auto pt-20 lg:pt-24`;
const HeadingInfoContainer = `flex flex-col items-center`;
const HeadingDescription = `mt-4 font-medium text-gray-600 text-center`;
const Content = `ingredient`;
const Card = `mb-10 mt-24 md:flex justify-center items-center flex-row`;
const Subtitle = `flex items-center text-gray-900 tracking-wide`;

const VerticalWithAlternateImageAndText = ({ data = {}, posts }: any) => {
  const { strMeal, strInstructions, strMealThumb } = data;
  const ingredients = useMemo(() => {
    const arr: IIngredient[] = [];

    for (let i = 1; i <= 20; i++) {
      const title = data[`strIngredient${i}`];
      if (title) {
        arr.push({
          title: data[`strIngredient${i}`],
          measure: data[`strMeasure${i}`],
        });
      }
    }
    return arr;
  }, [data]);

  return (
    <div className={Container}>
      <div className={SingleColumn}>
        <div className={HeadingInfoContainer}>
          <h2 className={HeadingTitle}>{strMeal}</h2>
          <p className={HeadingDescription}>{strInstructions}</p>
        </div>

        <div className={Card}>
          <div className="relative rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8">
            {strMealThumb && (
              <Image objectFit="cover" src={strMealThumb} alt="" />
            )}
          </div>
        </div>
        <div className={HeadingInfoContainer}>
          <h2 className={HeadingTitle}>Ingredients</h2>
          {ingredients.map((el, i) => (
            <div className={Content} key={i}>
              <div className={Subtitle}>
                {el.title}: {el.measure}
              </div>
            </div>
          ))}
        </div>
      </div>
      <ThreeColSimpleWithImage data={posts} />
      <SvgDotPatternIcon className="absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24" />
      <SvgDotPatternIcon className="absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24" />
      <SvgDotPatternIcon className="absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24" />
      <SvgDotPatternIcon className="absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24" />
    </div>
  );
};

export default VerticalWithAlternateImageAndText;
