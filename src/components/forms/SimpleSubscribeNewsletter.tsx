import React from "react";
import EmailNewsletterIconBase from "images/email-newsletter-icon.svg";
import {
  Container as ContainerBase,
  SectionHeading,
  PrimaryButton,
} from "components";

const Container = `bg-secondary-800 -mx-8`;
const Content = `max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = `flex items-center justify-center flex-col lg:flex-row px-8`;
const TextColumn = `flex items-center flex-col sm:flex-row`;
const FormColumn = `mt-12 lg:mt-0 lg:ml-16 w-full sm:w-auto`;

const EmailNewsletterIcon = `w-16 h-16 text-green-500`;
const HeadingInfoContainer = `sm:ml-6 mt-6 sm:mt-0`;
const Heading = `text-gray-100 sm:text-left leading-none`;
const Description = `text-gray-500 font-medium text-sm max-w-sm mt-2 sm:mt-1 text-center sm:text-left`;

const Form = `text-sm max-w-sm sm:max-w-none mx-auto`;
const Input = `w-full sm:w-auto block sm:inline-block px-6 py-4 rounded bg-secondary-600 tracking-wider font-bold border border-secondary-600 focus:border-secondary-300 focus:outline-none sm:rounded-r-none hover:bg-secondary-500 transition duration-300 text-gray-200`;
const Button = `w-full sm:w-auto mt-6 sm:mt-0 sm:rounded-l-none py-4 bg-green-500 text-gray-100 hocus:bg-green-700 hocus:text-gray-300 border border-green-500 hocus:border-green-700`;

const SimpleSubscribeNewsletter = () => {
  return (
    <div className={`${Container} ${ContainerBase}`}>
      <div className={Content}>
        <div className={Row}>
          <div className={TextColumn}>
            <EmailNewsletterIconBase className={EmailNewsletterIcon} />
            <div className={HeadingInfoContainer}>
              <div className={`${Heading} ${SectionHeading}`}>Newsletter</div>
              <div className={Description}>
                Subscribe now to get latest recipes.
              </div>
            </div>
          </div>
          <div className={FormColumn}>
            <form className={Form}>
              <input
                className={Input}
                name="newsletter"
                type="email"
                placeholder="Your Email Address"
              />
              <button className={`${PrimaryButton} ${Button}`} type="submit">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleSubscribeNewsletter;
