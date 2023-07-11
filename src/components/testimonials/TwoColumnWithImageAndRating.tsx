import "slick-carousel/slick/slick.css";
import React, { useState } from "react";
import Slider from "react-slick";
import { Container, ContentWithPaddingXl, SectionHeading } from "components";
import StarIconBase from "images/star-icon.svg";
import ArrowLeftIcon from "images/arrow-left-3-icon.svg";
import ArrowRightIcon from "images/arrow-right-3-icon.svg";
import clsx from "clsx";
import Image from "next/legacy/image";

const Row = `flex flex-col md:flex-row justify-between items-center`;
const Column = `w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = `md:w-5/12 xl:w-6/12 flex-shrink-0 relative`;
const TextColumn = `md:w-7/12 xl:w-6/12 mt-16 md:mt-0`;
const Heading = `mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = `mt-6 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const TestimonialSlider = `w-full mt-10 text-center md:text-left`;
// .slick-track {
//   ${tw`flex`}
// }
// .slick-slide {
//   ${tw`h-auto flex justify-center mb-1`}
// }

const Testimonial = `outline-none h-full flex! flex-col`;
const StarsContainer = ``;
const StarIcon = `inline-block w-5 h-5 text-orange-400 fill-current mr-1 last:mr-0`;
const TestimonialHeading = `mt-4 text-xl font-bold`;
const Quote = `mt-4 mb-8 sm:mb-10 leading-relaxed font-medium text-gray-700`;
const CustomerInfoAndControlsContainer = `mt-auto flex justify-between items-center flex-col sm:flex-row`;

const Controls = `flex mt-8 sm:mt-0`;
const ControlButton = `mx-3 p-4 rounded-full transition duration-300 bg-gray-200 hover:bg-gray-300 text-primary-500 hover:text-primary-700 focus:outline-none focus:shadow-outline`;

const TwoColumnWithImageAndRating = ({
  imageSrc = "/images/love-illustration.svg",
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  heading = "About Us",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.",
  textOnLeft = false,
  testimonials = [
    {
      profileImageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      heading: "Our Mission",
      stars: 5,
      quote: `You don’t need to outright say, “our mission is ____,” but you should convey the mission of your business in your About Us copy. This is key for attracting talent, as well as leads that have Corporate Social Responsibility (CSR) goals.
      `,
      customerName: "Charlotte Hale",
      customerTitle: "CEO, Delos Inc.",
    },
    {
      profileImageSrc:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
      heading: "Your Story (History)",
      quote: `Every business has an origin story worth telling, and usually, one that justifies why you even do business and have clients.

        Some centennial enterprises have pages of content that can fit in this section, while startups can tell the story of how the company was born, its challenges, and its vision for the future`,
      stars: 4,
      customerName: "Adam Cuppy",
      customerTitle: "Founder, EventsNYC",
    },
  ],
}) => {
  const [sliderRef, setSliderRef] = useState<any>(null);

  return (
    <div className={Container}>
      <div className={ContentWithPaddingXl}>
        <div className={Row}>
          <div className={`${Column} ${ImageColumn}`}>
            <Image
              layout="fill"
              src={imageSrc}
              className={clsx({
                rounded: imageRounded,
                border: imageBorder,
                shadow: imageShadow,
              })}
            />
          </div>
          <div
            className={clsx(Column, TextColumn, {
              "md:pr-12 lg:pr-16 md:order-first": textOnLeft,
              "md:pl-12 lg:pl-16 md:order-last": !textOnLeft,
            })}
          >
            <div className={`${SectionHeading} ${Heading}`}>{heading}</div>
            <p className={Description}>{description}</p>
            <Slider
              className={TestimonialSlider}
              arrows={false}
              ref={setSliderRef}
            >
              {testimonials.map((testimonial, index) => (
                <div className={Testimonial} key={index}>
                  <div className={StarsContainer}>
                    {Array.from({ length: testimonial.stars }).map(
                      (_, indexIcon) => (
                        <StarIconBase className={StarIcon} key={indexIcon} />
                      )
                    )}
                  </div>
                  <div className={TestimonialHeading}>
                    {testimonial.heading}
                  </div>
                  <blockquote className={Quote}>{testimonial.quote}</blockquote>
                  <div className={CustomerInfoAndControlsContainer}>
                    <div className={Controls}>
                      <button
                        className={ControlButton}
                        onClick={sliderRef?.slickPrev}
                      >
                        <ArrowLeftIcon className="w-4 h-4 stroke-3" />
                      </button>
                      <div className="my-3 border-r" />
                      <button
                        className={ControlButton}
                        onClick={sliderRef?.slickNext}
                      >
                        <ArrowRightIcon className="w-4 h-4 stroke-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnWithImageAndRating;
