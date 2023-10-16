import React from "react";
import {
  SectionHeading,
  Subheading as CSubheading,
  SectionDescription,
  Container,
  ContentWithPaddingXl,
} from "components";
import ArrowRightIcon from "images/arrow-right-icon.svg";
import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import SvgDecoratorBlob3 from "images/svg-decorator-blob-3.svg";
import { IThreeColSimple } from "types";
import Link from "next/link";
import Image from "next/legacy/image";
import tw from 'twin.macro'

const Subheading = tw(CSubheading)`text-center mb-3`;
const Description = tw(SectionDescription)`text-center mx-auto`;
const Heading = tw(SectionHeading)``
const ThreeColumnContainer = `mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto`;
const Column = `lg:w-1/3 max-w-xs`;
const Card = `flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105 `;

const ThreeColSimple = ({
  cards = [
    {
      imageSrc: ShieldIconImage,
      title: "Secure",
      description:
        "We strictly only deal with vendors that provide top notch security.",
      url: "https://timerse.com",
    },
    {
      imageSrc: SupportIconImage,
      title: "24/7 Support",
      description: "Lorem ipsum donor amet siti ceali placeholder text",
      url: "https://google.com",
    },
    {
      imageSrc: CustomizeIconImage,
      title: "Customizable",
      description: "Lorem ipsum donor amet siti ceali placeholder text",
      url: "https://reddit.com",
    },
  ],
  linkText = "Learn More",
  heading = "",
  subheading = "",
  description = "",
}: IThreeColSimple) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        {subheading && (
          <Subheading>{subheading}</Subheading>
        )}
        {heading && <Heading>{heading}</Heading>}
        {description && (
          <Description>
            {description}
          </Description>
        )}
        <div className={ThreeColumnContainer}>
          {cards.map((card, i) => (
            <div className={Column} key={i}>
              <Link href={card.url}>
                <div className={Card}>
                  <span className="text-center rounded-full p-4 bg-gray-100">
                    <Image width={32} height={32} src={card.imageSrc} alt="" />
                  </span>
                  <span className="mt-4 font-bold text-xl leading-none">
                    {card.title}
                  </span>
                  <p className="mt-4 text-sm font-medium text-secondary-300">
                    {card.description}
                  </p>
                  {linkText && (
                    <span className="mt-auto inline-flex items-center pt-5 text-sm font-bold text-primary-300 leading-none hocus:text-primary-900 transition duration-300">
                      <span>{linkText}</span>
                      <ArrowRightIcon className="ml-2 w-4" />
                    </span>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </ContentWithPaddingXl>
      <SvgDecoratorBlob3 className="pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-40" />
    </Container>
  );
};

export default ThreeColSimple;
