import React from "react";
import { SectionHeading, ThreeColSimpleWithImage, Container } from "components";
import clsx from "clsx";
import Image from "next/legacy/image";

const TwoColumn = `flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = `w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = `md:w-6/12 lg:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = `md:w-6/12 mt-8 md:mt-0`;
const TextContent = `lg:py-8`;

const Heading = `text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = `text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-4`;

const Statistics = `mt-6 lg:mt-8 xl:mt-16 flex flex-wrap`;
const Statistic = `text-lg sm:text-2xl lg:text-3xl w-1/2 mt-4 lg:mt-10 text-center md:text-left`;
const Value = `font-bold text-primary-500`;
const Key = `font-medium text-gray-700`;

const TwoColSignleFeatureWithStats = ({
  textOnLeft = false,
  data,
  posts,
}: any) => {
  const { title, description, imageSrc } = data;
  const statistics = [
    {
      key: "People like this",
      value: Math.floor(Math.random() * 10000) + 1,
    },
  ];

  return data ? (
    <div className={Container}>
      <div className={`${Column} ${TwoColumn}`}>
        <div className={`${Column} ${ImageColumn}`}>
          <Image
            className="rounded bg-cover bg-center h-full"
            layout="fill"
            alt=""
            src={imageSrc}
          />
        </div>
        <div
          className={clsx(TextColumn, {
            "md:mr-8 lg:mr-16 md:order-first": textOnLeft,
            "md:ml-8 lg:ml-16 md:order-last": !textOnLeft,
          })}
        >
          <div className={TextContent}>
            <div className={`${Heading} ${SectionHeading}`}>{title}</div>
            <p className={Description}>{description}</p>
            <div className={Statistics}>
              {statistics.map((statistic, index) => (
                <div className={Statistic} key={index}>
                  <div className={Value}>{statistic.value}</div>
                  <div className={Key}>{statistic.key}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ThreeColSimpleWithImage data={posts} />
    </div>
  ) : (
    <div></div>
  );
};

export default TwoColSignleFeatureWithStats;
