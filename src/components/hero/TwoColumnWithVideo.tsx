"use client";
import React, { useState } from "react";
import { ReactModalAdapter, ResponsiveVideoEmbed } from "helpers";
import PlayIcon from "feather-icons/dist/icons/play-circle.svg";
import SvgDecoratorBlob1 from "images/svg-decorator-blob-1.svg";
import SvgDecoratorBlob2 from "images/dot-pattern.svg";
import DesignIllustration from "images/design-illustration.svg";
import { ITwoColumnWithVideo } from "types";
import { Container } from "components";

const TwoColumn = `flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = `relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
const RightColumn = `relative mt-12 lg:mt-0 flex flex-col justify-center`;

const Heading = `font-black text-3xl md:text-5xl leading-snug max-w-3xl`;
const Paragraph = `my-5 lg:my-8 text-sm lg:text-base font-medium text-gray-600 max-w-lg mx-auto lg:mx-0`;

const Actions = `flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8`;
const PrimaryButton = `font-bold px-8 lg:px-10 py-3 rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300`;
const WatchVideoButton = `mt-4 sm:mt-0 sm:ml-8 flex items-center text-secondary-300 transition duration-300 hocus:text-primary-400 focus:outline-none`;
const IllustrationContainer = `flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`;

const TwoColumnWithVideo = ({
  heading = "Modern React Templates, Just For You",
  description = "Our templates are easy to setup, understand and customize. Fully modular components with a variety of pages and components.",
  primaryButtonText = "Get Started",
  primaryButtonUrl = "#",
  watchVideoButtonText = "Watch Video",
  watchVideoYoutubeUrl = "https://www.youtube.com/embed/_GuOjXYl5ew",
  imageSrc = DesignIllustration,
  imageCss = null,
  imageDecoratorBlob = false,
}: ITwoColumnWithVideo) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  return (
    <>
      <div className={Container}>
        <div className={TwoColumn}>
          <div className={LeftColumn}>
            <h1 className={Heading}>{heading}</h1>
            <div className={Paragraph}>{description}</div>
            <div className={Actions}>
              <button className={PrimaryButton} as="a" href={primaryButtonUrl}>
                {primaryButtonText}
              </button>
              <button className={WatchVideoButton} onClick={toggleModal}>
                <span>
                  <PlayIcon className="stroke-1" />
                </span>
                <span className="ml-2 font-medium">{watchVideoButtonText}</span>
              </button>
            </div>
          </div>
          <div className={RightColumn}>
            <div className={IllustrationContainer}>
              <img className={imageCss} src={imageSrc} alt="Hero" />
              {imageDecoratorBlob && (
                <SvgDecoratorBlob2 className="pointer-events-none fill-current text-primary-500 opacity-25 absolute w-32 h-32 right-0 bottom-0 transform translate-x-10 translate-y-10 -z-10" />
              )}
            </div>
          </div>
        </div>
        <SvgDecoratorBlob1 className="pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3  -z-10" />
        <ReactModalAdapter show={modalIsOpen} onClose={toggleModal} title="">
          <ResponsiveVideoEmbed url={watchVideoYoutubeUrl} />
        </ReactModalAdapter>
      </div>
    </>
  );
};

export default TwoColumnWithVideo;
