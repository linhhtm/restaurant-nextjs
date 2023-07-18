"use client";
import React, { useEffect, useState } from "react";
import {
  Container,
  ContentWithPaddingXl,
  SectionHeading,
  PrimaryButton,
} from "components";
import { IPost } from "types";
import Link from "next/link";
import clsx from "clsx";
import { default as NextImage } from "next/image";
import API from "service";

const HeadingRow = `flex`;
const Heading = `text-gray-900`;
const Posts = `mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = `mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`;
// props.featured &&
// css`
//   ${Post} {
//     ${tw`sm:flex-row! h-full sm:pr-4`}
//   }
//   ${Image} {
//     ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
//   }
//   ${Info} {
//     ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
//   }
//   ${Description} {
//     ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
//   }
// `}
const Post = `cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = `relative h-64 w-full bg-cover bg-center rounded-t-lg`;
const Info = `p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = `uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = `mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = `mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = ``;

const ButtonContainer = `flex justify-center`;
const LoadMoreButton = `mt-16 mx-auto`;

const PostList = ({ headingText = "Blog Posts" }: any) => {
  const [visible, setVisible] = useState(7);
  const [data, setData] = useState([]);
  const onLoadMoreClick = () => {
    setVisible((v) => v + 6);
  };

  useEffect(() => {
    (async () => {
      const res = await API.getBlogList();
      setData(res || []);
    })();
  }, []);

  return (
    <div className={Container}>
      <div className={ContentWithPaddingXl}>
        <div className={HeadingRow}>
          <div className={`${SectionHeading} ${Heading}`}>{headingText}</div>
        </div>
        <div className={Posts}>
          {data?.slice(0, visible).map((post: IPost, index: number) => (
            <div
              className={clsx(PostContainer, {
                group: post.featured,
              })}
              key={index}
            >
              <Link href={`posts/${post.id}`}>
                <div
                  className={`group ${Post} group:sm:flex-row!:h-full:sm:pr-4`}
                >
                  <div className={Image}>
                    <NextImage
                      alt={post.title}
                      layout="fill"
                      src={post.imageSrc}
                    />
                  </div>
                  <div className={Info}>
                    <div className={Category}>{post.category}</div>
                    <div className={CreationDate}>{post.date}</div>
                    <div className={Title}>{post.title}</div>
                    {post.featured && post.description && (
                      <div className={Description}>{post.description}</div>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {visible < data.length && (
          <div className={ButtonContainer}>
            <button
              className={`${PrimaryButton} ${LoadMoreButton}`}
              onClick={onLoadMoreClick}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostList;
