import React, { useEffect, useRef, useState } from "react";
import { ReactModalAdapter, useAnimatedNavToggler, MotionDiv } from "helpers";
import MenuIcon from "feather-icons/dist/icons/menu.svg";
import CloseIcon from "feather-icons/dist/icons/x.svg";
import { IHeader, IRecipe } from "types";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import HeartIcon from "feather-icons/dist/icons/heart.svg";
import { useSelector } from "react-redux";
import { getFavoriteList } from "store/slice/recipe.slice";
import { CardRecipe } from "components/cards";
import clsx from "clsx";
import tw from "twin.macro";
import { useUser } from '@auth0/nextjs-auth0/client';
import DropdownHeader from "./DropdownHeader";
import Image from "next/image";

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: `sm:hidden`,
    desktopNavLinks: `sm:flex`,
    mobileNavLinksContainer: `sm:hidden`,
  },
  md: {
    mobileNavLinks: `md:hidden`,
    desktopNavLinks: `md:flex`,
    mobileNavLinksContainer: `md:hidden`,
  },
  lg: {
    mobileNavLinks: `lg:hidden`,
    desktopNavLinks: `lg:flex`,
    mobileNavLinksContainer: `lg:hidden`,
  },
  xl: {
    mobileNavLinks: `lg:hidden`,
    desktopNavLinks: `lg:flex`,
    mobileNavLinksContainer: `lg:hidden`,
  },
};

const HeaderStyle = `
  flex justify-between items-center
  max-w-screen-xl mx-auto
  my-3
`;
const NavLinks = `flex items-center flex-wrap`;
const NavLink = `cursor-pointer
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500`;

const LogoLink = `cursor-pointer
  my-2 lg:my-0 tracking-wide transition duration-300
  pb-1 border-transparent hover:border-primary-500 hocus:text-primary-500
  flex items-center font-black border-b-0 text-2xl !ml-0`;
const MobileNavLinksContainer = `flex flex-1 items-center justify-between`;
const NavToggle = `
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;
const MobileNavLinks = `lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`;
// ${NavLinks} {
//   ${tw`flex flex-col items-center`}
// }

const DesktopNavLinks = `
  hidden lg:flex flex-1 justify-between items-center
`;
const Input = `hover:border-primary-100 mr-3 border-2 border-solid p-2 rounded border-gray-300`;
const Button = tw.button`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;

const tabs = [
  {
    pathname: "/about-us",
    name: "About",
  },
  {
    pathname: "/recipes",
    name: "Recipe",
  },
  {
    pathname: "/posts",
    name: "Blog",
  },
];

const Header = ({ className, collapseBreakpointClass = "lg" }: IHeader) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams() as any;
  const activeTab = pathname;
  const favoriteList = useSelector(getFavoriteList);
  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const { user } = useUser();

  const collapseBreakpointCss =
    collapseBreakPointCssMap[
      collapseBreakpointClass as keyof typeof collapseBreakPointCssMap
    ];

  const showFavoriteList = () => {
    setShowModal(true);
  };
  const DefaultLinks = (
    <div className={NavLinks}>
      {tabs.map((el) => (
        <Link
          key={el.pathname}
          href={el.pathname}
          className={clsx(NavLink, {
            "border-primary-500 text-primary-500": el.pathname === activeTab,
          })}
        >
          {el.name}
        </Link>
      ))}
      {user ? (
        <DropdownHeader/>
      ) : (
        <>
          <Link href="#" className={NavLink} onClick={showFavoriteList}>
            <HeartIcon className="inline" />
          </Link>
          <Button onClick={() => router.push("/api/auth/login")}>
            Login
          </Button>
          {/* <Button>Sign Up</Button> */}
        </>
      )}
    </div>
  );
  const DefaultLogoLink = (
    <Link href="/" className={LogoLink}>
      <Image src={"/images/logo.jpg"} width={40} height={40} className="w-10 mr-3" alt="logo" />
      HomeKitchen
    </Link>
  );

  const searchRecipe = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (inputRef.current?.value?.trim() === "") {
        router.push("/recipes");
      } else router.push(`/search?s=${inputRef.current?.value}`);
    }
  };
  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  useEffect(() => {
    if (inputRef.current?.value)
      inputRef.current.value = String(searchParams?.s ?? "");
  }, [inputRef.current]);

  return (
    <header className={clsx(className || "header-light", HeaderStyle)}>
      <nav
        className={clsx(DesktopNavLinks, collapseBreakpointCss.desktopNavLinks)}
      >
        {DefaultLogoLink}
        <div className="flex items-center">
          <input
            className={Input}
            ref={inputRef}
            onKeyUp={searchRecipe}
            id="name-input"
            type="text"
            name="name"
            placeholder="Search recipe"
          />
          {DefaultLinks}
        </div>
      </nav>

      <nav
        className={clsx(
          MobileNavLinksContainer,
          collapseBreakpointCss.mobileNavLinksContainer
        )}
      >
        {DefaultLogoLink}
        <MotionDiv
          className={`${MobileNavLinks} ${collapseBreakpointCss.mobileNavLinks}`}
          initial={{ x: "150%", display: "none" }}
          animate={animation}
        >
          {DefaultLinks}
        </MotionDiv>
        <button
          onClick={toggleNavbar}
          className={clsx(NavToggle, showNavLinks ? "open" : "closed")}
        >
          {showNavLinks ? (
            <CloseIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </nav>

      <ReactModalAdapter
        title="Favorite list"
        show={showModal}
        onClose={toggleModal}
      >
        {favoriteList.map((el: IRecipe) => (
          <CardRecipe key={el.idMeal} data={el} />
        ))}
      </ReactModalAdapter>
    </header>
  );
};

export default Header;
