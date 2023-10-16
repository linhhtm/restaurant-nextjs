import React from "react";
import { SectionHeading as HeadingTitle, Container } from "components";
import SvgDecoratorBlob1 from "images/svg-decorator-blob-1.svg";
import SvgDecoratorBlob2 from "images/svg-decorator-blob-3.svg";
import { IPost } from "types";
import { default as NextLink } from "next/link";
import Image from "next/legacy/image";

const Content = `max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = `flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = `mt-24 lg:w-1/3`;

const HeadingInfoContainer = `flex flex-col items-center`;
const HeadingDescription = `mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = `lg:mx-4 xl:mx-8 max-w-sm lg:max-w-xs`;
const Category = `mt-4 text-secondary-100 font-bold text-sm`;
const Title = `mt-2 leading-relaxed font-bold text-lg`;
const Link = `inline-block mt-2 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const ThreeColSimpleWithImage = ({ data }: any) => {
  return (
    <Container>
      <div className={Content}>
        <div className={HeadingInfoContainer}>
          <HeadingTitle>Popular Blog Posts</HeadingTitle>
          <p className={HeadingDescription}>
            Some amazing blog posts that are written by even more amazing
            people.
          </p>
        </div>
        <div className={ThreeColumn}>
          {data?.map((post: IPost, index: number) => (
            <div className={Column} key={index}>
              <div className={Card}>
                <div className="relative bg-cover bg-center h-80 lg:h-64 rounded">
                  <Image alt="" layout="fill" src={post.imageSrc} />
                </div>
                <div className={Category}>{post.category}</div>
                <div className={Title}>{post.title}</div>
                <NextLink className={Link} href={`/posts/${post.id}`}>
                  Read Post
                </NextLink>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SvgDecoratorBlob1 className="-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25" />
      <SvgDecoratorBlob2 className="-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25" />
    </Container>
  );
};

export default ThreeColSimpleWithImage;
