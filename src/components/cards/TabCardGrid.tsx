import {
  Button,
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
// import { useRouter, useSearchParams } from "next/navigation";
import { MotionDiv } from "helpers";
import TabCardGridHead from "./TabCardGridHead";

const Container = `${CContainer} px-1`;
const PrimaryButton = `${CPrimaryButton} w-full sm:w-auto mt-6 sm:mt-0 sm:rounded-l-none py-4 bg-green-500 text-gray-100 hocus:bg-green-700 hocus:text-gray-300 border border-green-500 hocus:border-green-700`;

const TabContent = `tab-content mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;

const DecoratorBlob1 = `pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`;
const DecoratorBlob2 = `pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`;

const TabCardGrid = ({ heading, tabs, searchParams }: ITabCardGrid) => {
  const tabsKeys = Object.keys(tabs);
  const activeTab = searchParams["category"] || tabsKeys[0];
  const isEmpty = tabsKeys.length === 0;

  return (
    <div className={Container}>
      <div className={CContentWithPaddingXl}>
        {isEmpty ? (
          <div className="empty">
            <div className={`${SectionHeading} !text-left`}>{heading}</div>
            <div className="flex items-center flex-col mt-10">
              <EmailNewsletterIconBase className="w-40 h-40" />
              <b className="text-xl mb-5">
                The products you were looking for was not found
              </b>
              <Button className={PrimaryButton}>Home</Button>
            </div>
          </div>
        ) : (
          <>
            <TabCardGridHead tabs={tabs} heading={heading} />
            {tabsKeys.map((tabKey) => (
              <MotionDiv
                className={TabContent}
                key={tabKey}
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
          </>
        )}
      </div>
      <SvgDecoratorBlob1 className={DecoratorBlob1} />
      <SvgDecoratorBlob2 className={DecoratorBlob2} />
    </div>
  );
};

export default TabCardGrid;
