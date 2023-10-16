import React from "react";
import FacebookIcon from "images/facebook-icon.svg";
import TwitterIcon from "images/twitter-icon.svg";
import YoutubeIcon from "images/youtube-icon.svg";
import { default as NextLink } from "next/link";

const Container = `relative bg-gray-200 -mx-8 -mb-8 px-8`;
const FiveColumns = `max-w-screen-xl mx-auto py-16 lg:py-20 flex flex-wrap justify-between`;

const Column = `md:w-1/5`;
const WideColumn = `text-center md:text-left w-full md:w-2/5 mb-10 md:mb-0`;

const ColumnHeading = `font-bold`;

const LinkList = `mt-4 text-sm font-medium`;
const LinkListItem = `mt-3`;
const Link = `cursor-pointer border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300`;

const LogoContainer = `flex items-center justify-center md:justify-start`;
const LogoImg = `w-12`;
const LogoText = `ml-2 text-xl font-black text-primary-500`;

const CompanyDescription = `mt-4 max-w-xs font-medium text-sm mx-auto md:mx-0 md:mr-4 `;

const SocialLinksContainer = `mt-4 `;
const SocialLink = `cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4`;

const Footer = () => {
  return (
    <div>
    <div className={Container}>
      <div className={FiveColumns}>
        <div className={`${Column} ${WideColumn}`}>
          <div className={LogoContainer}>
            <img className={LogoImg} src={"/images/logo.jpg"} />
            <h5 className={LogoText}>HomeKitchen Inc.</h5>
          </div>
          <p className={CompanyDescription}>HomeKitchen description</p>
          <div className={SocialLinksContainer}>
            <NextLink
              className={SocialLink}
              target={"_blank"}
              href="https://facebook.com"
            >
              <FacebookIcon className="w-4 h-4" />
            </NextLink>
            <NextLink
              className={SocialLink}
              target={"_blank"}
              href="https://twitter.com"
            >
              <TwitterIcon className="w-4 h-4" />
            </NextLink>
            <NextLink
              className={SocialLink}
              target={"_blank"}
              href="https://youtube.com"
            >
              <YoutubeIcon className="w-4 h-4" />
            </NextLink>
          </div>
        </div>
        <div className={Column}>
          <h5 className={ColumnHeading}>Quick Links</h5>
          <ul className={LinkList}>
            <li className={LinkListItem}>
              <NextLink className={Link} href="">
                Blog
              </NextLink>
            </li>
            <li className={LinkListItem}>
              <NextLink className={Link} href="">
                FAQs
              </NextLink>
            </li>
            <li className={LinkListItem}>
              <NextLink className={Link} href="">
                Support
              </NextLink>
            </li>
            <li className={LinkListItem}>
              <NextLink className={Link} href="">
                About Us
              </NextLink>
            </li>
          </ul>
        </div>
        <div className={Column}>
          <h5 className={ColumnHeading}>Product</h5>
          <ul className={LinkList}>
            <li className={LinkListItem}>
              <NextLink className={Link} href="">
                Personal
              </NextLink>
            </li>
            <li className={LinkListItem}>
              <NextLink className={Link} href="">
                Business
              </NextLink>
            </li>
            <li className={LinkListItem}>
              <NextLink className={Link} href="">
                Team
              </NextLink>
            </li>
          </ul>
        </div>
        <div className={Column}>
          <h5 className={ColumnHeading}>Legal</h5>
          <ul className={LinkList}>
            <li className={LinkListItem}>
              <NextLink className={Link} href="">
                GDPR
              </NextLink>
            </li>
            <li className={LinkListItem}>
              <NextLink className={Link} href="">
                Privacy Policy
              </NextLink>
            </li>
            <li className={LinkListItem}>
              <NextLink className={Link} href="">
                Terms of Service
              </NextLink>
            </li>
            <li className={LinkListItem}>
              <NextLink className={Link} href="">
                Disclaimer
              </NextLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
