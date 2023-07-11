import React from "react";
import { motion } from "helpers";
import { Container, ContentWithPaddingXl, SectionHeading } from "components";
import { IPost } from "types";
import Link from "next/link";

const Row = `flex flex-col lg:flex-row -mb-10`;
const Heading = `text-left lg:text-4xl xl:text-5xl`;
const PopularPostsContainer = `lg:w-2/3`;
const PostsContainer = `mt-12 flex flex-col sm:flex-row sm:justify-between lg:justify-start`;
const Post = `block sm:max-w-sm cursor-pointer mb-16 last:mb-0 sm:mb-0 sm:odd:mr-8 lg:mr-8 xl:mr-16`;
const Image = `h-64 bg-cover bg-center rounded`;
const Title = `line-clamp-2 mt-6 text-xl font-bold transition duration-300 group-hover:text-primary-500`;
const Description = `line-clamp-3 mt-2 font-medium text-secondary-100 leading-loose text-sm`;
const AuthorInfo = `mt-6 flex items-center`;
const AuthorImage = `w-12 h-12 rounded-full`;
const AuthorNameAndProfession = `ml-4`;
const AuthorName = `font-semibold text-lg`;
const AuthorProfile = `text-secondary-100 text-sm`;
const RecentPostsContainer = `mt-24 lg:mt-0 lg:w-1/3`;
const PostTextContainer = ``;

// This setting is for animating the post background image on hover
const postBackgroundSizeAnimation = {
  rest: {
    backgroundSize: "100%",
  },
  hover: {
    backgroundSize: "110%",
  },
};

const PopularAndRecentBlogPost = ({
  popularPosts = [],
  recentPosts = [],
}: {
  popularPosts: IPost[];
  recentPosts: IPost[];
}) => {
  return (
    <div className={Container}>
      <div className={ContentWithPaddingXl}>
        <div className={Row}>
          <div className={PopularPostsContainer}>
            <div className={`${SectionHeading} ${Heading}`}>Table talks</div>
            <div className={PostsContainer}>
              {popularPosts.map((post: IPost, index: number) => (
                <Link key={index} href={`/posts/${post.id}`}>
                  <motion.a
                    className={`group ${Post}`}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                  >
                    <motion.div
                      className={Image}
                      transition={{ duration: 0.3 }}
                      variants={postBackgroundSizeAnimation}
                      style={{
                        backgroundImage: `url(${post.imageSrc})`,
                      }}
                    />
                    <h5 className={Title}>{post.title}</h5>
                    <p className={Description}>{post.description}</p>
                    <div className={AuthorInfo}>
                      <div
                        className={AuthorImage}
                        style={{ backgroundImage: post.author?.imageSrc }}
                      />
                      <div className={AuthorNameAndProfession}>
                        <h6 className={AuthorName}>{post.author?.name}</h6>
                        <p className={AuthorProfile}>{post.author?.profile}</p>
                      </div>
                    </div>
                  </motion.a>
                </Link>
              ))}
            </div>
          </div>
          <div className={RecentPostsContainer}>
            <div className={Heading}>Recent Posts</div>
            <div className={`${PostsContainer} flex flex-wrap lg:flex-col`}>
              {recentPosts.map((post: IPost, index: number) => (
                <Link key={index} href={`/posts/${post.id}`}>
                  <div
                    className={`${Post} flex justify-between mb-10 max-w-none w-full sm:w-1/2 lg:w-auto sm:odd:pr-12 lg:odd:pr-0 mr-0 group`}
                  >
                    <div className={PostTextContainer}>
                      <h5
                        className={`${Title} text-base xl:text-lg mt-0 mr-4 lg:max-w-xs`}
                      >
                        {post.title}
                      </h5>
                      <div
                        className={`${AuthorName} mt-3 text-sm text-secondary-100 font-normal leading-none`}
                      >
                        {post.author?.name}
                      </div>
                    </div>
                    <motion.div
                      className={`${Image} h-20 w-20 flex-shrink-0`}
                      style={{
                        backgroundImage: `url(${post.imageSrc})`,
                      }}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularAndRecentBlogPost;
