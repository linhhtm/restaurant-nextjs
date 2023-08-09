"use client";
import React, { useEffect, useState } from "react";
import { MotionDiv } from "helpers";
import {
  Container,
  ContentWithPaddingXl,
  PrimaryButton,
  SectionHeading,
} from "components";
import SvgDecoratorBlob1 from "images/svg-decorator-blob-5.svg";
import SvgDecoratorBlob2 from "images/svg-decorator-blob-7.svg";
import { IRecipe, ITabCardGrid } from "types";
import CardRecipe from "./CardRecipe";
import clsx from "clsx";
import EmailNewsletterIconBase from "images/email-newsletter-icon.svg";
import { useRouter, useSearchParams } from "next/navigation";

const HeaderRow = `flex justify-between items-center flex-col xl:flex-row`;
const TabsControl = `flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;
const TabControl = `cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center
  hover:bg-gray-300 hover:text-gray-700`;
const TabContent = `mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;

const TabCardGrid = ({ heading, tabs }: ITabCardGrid) => {
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
    <div className={Container}>
      <div className={ContentWithPaddingXl}>
        {isEmpty ? (
          <div>
            <div className={clsx(SectionHeading, "!text-left")}>{heading}</div>
            <div className="flex items-center flex-col mt-10">
              <EmailNewsletterIconBase className="w-40 h-40" />
              <b className="text-xl mb-5">
                The products you were looking for was not found
              </b>
              <button
                className={PrimaryButton}
                onClick={() => router.push("/")}
              >
                Home
              </button>
            </div>
          </div>
        ) : (
          <div className={HeaderRow}>
            <div className={SectionHeading}>{heading}</div>
            <div className={TabsControl}>
              {Object.keys(tabs).map((tabName) => (
                <div
                  className={clsx(TabControl, {
                    "!bg-primary-500 !text-gray-100": activeTab === tabName,
                  })}
                  key={tabName}
                  onClick={() => setActiveTab(tabName)}
                >
                  {tabName}
                </div>
              ))}
            </div>
          </div>
        )}
        {tabsKeys.map((tabKey, index) => (
          <MotionDiv
            className={TabContent}
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
          </MotionDiv>
        ))}
      </div>
      <SvgDecoratorBlob1 className="pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400" />
      <SvgDecoratorBlob2 className="pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500" />
    </div>
  );
};

export default TabCardGrid;
