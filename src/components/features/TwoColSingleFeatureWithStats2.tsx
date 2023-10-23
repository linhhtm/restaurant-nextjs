import React from "react";
import {
  SectionHeading,
  Subheading as CSubheading,
  PrimaryButton as CPrimaryButton,
} from "components";
import StatsIllustrationSrc from "images/stats-illustration.svg";
import SvgDotPattern from "images/dot-pattern.svg";
import { ITwoColSingleFeatureWithStats2 } from "types";
import clsx from "clsx";
import { Container } from "../misc/Layouts";
import tw from "twin.macro";
import Image from 'next/image'

const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
  const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
  const ImageColumn = tw(
    Column
  )`md:w-5/12 flex-shrink-0 h-80 md:h-auto relative`;
  const TextColumn = tw(Column)`md:w-7/12 mt-16 md:mt-0`;

  const ImageWrap = tw.div`rounded bg-contain bg-no-repeat bg-center h-full`;
  const TextContent = tw.div`lg:py-8 text-center md:text-left`;

  const Subheading = tw(CSubheading)`text-center md:text-left`;
  const Heading = tw(
    SectionHeading
  )`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
  const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

  const Statistics = tw.div`flex flex-col items-center sm:block text-center md:text-left mt-4`;
  const Statistic = tw.div`text-left sm:inline-block sm:mr-12 last:mr-0 mt-4`;
  const Value = tw.div`font-bold text-lg sm:text-xl lg:text-2xl text-secondary-500 tracking-wide`;
  const Key = tw.div`font-medium text-primary-700`;

  const PrimaryButton = tw(
    CPrimaryButton
  )`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;

const defaultStatistics = [
  {
    key: "Clients",
    value: "2282+",
  },
  {
    key: "Projects",
    value: "3891+",
  },
  {
    key: "Awards",
    value: "1000+",
  },
];

const TwoColSingleFeatureWithStats2 = ({
  subheading = "Our Track Record",
  heading = (
    <>
      We have been doing this <wbr /> since{" "}
      <span className="text-primary-500">1999.</span>
    </>
  ),
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  primaryButtonText = "Learn More",
  primaryButtonUrl = "https://timerse.com",
  imageSrc = StatsIllustrationSrc,
  imageCss = '',
  imageContainerCss = '',
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  imageInsideDiv = true,
  statistics = null,
  textOnLeft = false,
}: ITwoColSingleFeatureWithStats2) => {

  if (!statistics) statistics = defaultStatistics;

  return (
    <Container>
      <TwoColumn
        className={clsx({
          "md:items-center": !imageInsideDiv,
        })}
      >
        <ImageColumn className={imageContainerCss}>
          {imageInsideDiv ? (
            <ImageWrap
              className={imageCss}
              style={{ backgroundImage: `url("${imageSrc}")` }}
            />
          ) : (
            <Image src={imageSrc} alt="" layout="fill"/>
          )}
          {imageDecoratorBlob && (
            <SvgDotPattern
              className={`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10 ${imageDecoratorBlobCss}`}
            />
          )}
        </ImageColumn>
        <TextColumn
          className={clsx({
            "md:!mr-12 lg:!mr-16 md:!order-first": textOnLeft,
            "md:ml-12 lg:ml-16 md:order-last": !textOnLeft,
          })}
        >
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <Statistics>
              {statistics?.map((statistic, index) => (
                <Statistic key={index}>
                  <Value>{statistic.value}</Value>
                  <Key>{statistic.key}</Key>
                </Statistic>
              ))}
            </Statistics>
            <PrimaryButton as="a" href={primaryButtonUrl}>
              {primaryButtonText}
            </PrimaryButton>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};

export default TwoColSingleFeatureWithStats2;
