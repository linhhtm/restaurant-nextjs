"use client";
import clsx from "clsx";
import { SectionHeading } from "components/misc";
import { useRouter, useSearchParams } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { ICategory, IRecipe } from "types";

const HeaderRow = `flex justify-between items-center flex-col xl:flex-row`;
const TabsControl = `flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;
const TabControl = `tab-control hover:bg-gray-300 hover:text-gray-700 cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`;
const TabControlActive = `!bg-primary-500 !text-gray-100`;

const TabCardGridHead = ({
  heading,
  tabs,
}: {
  heading: ReactNode;
  tabs: Record<ICategory["strCategory"], IRecipe[]>;
}) => {
  const searchParams = useSearchParams()
  const searchString = searchParams.get('s') || ''
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState("");
  const router = useRouter();

  const changeTab = (tabName: string) => {
    setActiveTab(tabName)
    router.push(`?s=${searchString}&category=${tabName}`, {
      scroll: false
    })
  }

  useEffect(() => {
    if (Object.keys(tabs).length) setActiveTab(tabsKeys[0]);
  }, [searchString]);

  return (
    <div className={HeaderRow}>
      <div className={SectionHeading}>{heading}</div>
      <div className={TabsControl}>
        {Object.keys(tabs).map((tabName) => (
          <div
            key={tabName}
            className={clsx(TabControl, {
              [TabControlActive]: activeTab === tabName,
            })}
            onClick={() => changeTab(tabName)}
          >
            {tabName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabCardGridHead;
