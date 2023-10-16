import React, { useEffect, useState } from "react";
import tw, { styled } from "twin.macro";
import {
  Container as CContainer,
  ContentWithPaddingXl as CContentWithPaddingXl,
  PrimaryButton as CPrimaryButton,
  SectionHeading,
} from "components";
import SvgDecoratorBlob1 from "images/svg-decorator-blob-5.svg";
import SvgDecoratorBlob2 from "images/svg-decorator-blob-7.svg";
import { IRecipe, ITabCardGrid } from "types";
import CardRecipe from "./CardRecipe";
import EmailNewsletterIconBase from "images/email-newsletter-icon.svg";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

const TabCardGrid = ({ heading, tabs }: ITabCardGrid) => {
  
const Container = tw(CContainer)`px-1`;

const ContentWithPaddingXl = tw(CContentWithPaddingXl)``;
const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;
const PrimaryButton = tw(
  CPrimaryButton
)`w-full sm:w-auto mt-6 sm:mt-0 sm:rounded-l-none py-4 bg-green-500 text-gray-100 hocus:bg-green-700 hocus:text-gray-300 border border-green-500 hocus:border-green-700`;

const TabControl: any = styled.div`
${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
&:hover {
  ${tw`bg-gray-300 text-gray-700`}
}
${(props: any) => props.active && tw`bg-primary-500! text-gray-100!`}
}
`;

const TabContent = tw(
  motion.div
)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

  const tabsKeys = Object.keys(tabs || {});
  const router = useRouter();
  const search = useSearchParams();
  const s = search.get("s");
  const isEmpty = tabsKeys.length === 0;
  const [flag, setFlag] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    if (Object.keys(tabs).length) setActiveTab(tabsKeys[0]);
  }, []);

  useEffect(() => {
    if (!flag) {
      const tabsKeys = Object.keys(tabs || {});
      setActiveTab(tabsKeys[0]);
      setFlag(true);
    }
  }, [tabs]);

  useEffect(() => {
    setFlag(false);
  }, [s]);

  return (
    <Container>
      <ContentWithPaddingXl>
        {isEmpty ? (
          <div>
            <SectionHeading className="!text-left">{heading}</SectionHeading>
            <div className="flex items-center flex-col mt-10">
              <EmailNewsletterIconBase className="w-40 h-40" />
              <b className="text-xl mb-5">
                The products you were looking for was not found
              </b>
              <PrimaryButton onClick={() => router.push("/")}>
                Home
              </PrimaryButton>
            </div>
          </div>
        ) : (
          <HeaderRow>
            <Header>{heading}</Header>
            <TabsControl>
              {Object.keys(tabs).map((tabName, index) => (
                <TabControl
                  key={index}
                  active={activeTab === tabName}
                  onClick={() => setActiveTab(tabName)}
                >
                  {tabName}
                </TabControl>
              ))}
            </TabsControl>
          </HeaderRow>
        )}
        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale: 1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale: 0.8,
                display: "none",
              },
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey as keyof typeof tabs]?.map((card: IRecipe) => (
              <CardRecipe key={card.idMeal} data={card} />
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

export default TabCardGrid;
