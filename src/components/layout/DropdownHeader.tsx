import { useUser } from "@auth0/nextjs-auth0/client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
// import { useRouter } from 'next/navigation'

const DropdownHeader = () => {
  const [isHidden, setIsHidden] = useState(true);
  const refMenu = useRef<any>(null);
  const refButton = useRef<any>(null);
  const { user = {} } = useUser();
  // const router = useRouter()

  const onClickOutside = () => {
    setIsHidden(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!refMenu.current.contains(event.target) && !refButton.current.contains(event.target)) {
        onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          ref={refButton}
          onClick={() => {
            setIsHidden((prevState) => !prevState);
          }}
        >
          <div className="flex items-center">
            <Image
              className="me-2"
              src={user.picture ?? ""}
              alt={user.name ?? ""}
              width={36}
              height={36}
            />
            <div className="text-left">
              <div>{user.name}</div>
              <div className="font-light">{user.email}</div>
            </div>
          </div>
          <svg
            className="-mr-1 h-5 w-5 text-gray-400 mt-auto"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        className={clsx(
          "absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
          {
            hidden: isHidden,
          }
        )}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
        ref={refMenu}
      >
        <div className="py-1" role="none">
          <div
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex={-1}
            id="menu-item-0"
          >
            My profile
          </div>
        </div>
        <div className="py-1" role="none">
          <Link
          href={`/api/auth/logout`}>
          <div
            className="cursor-pointer text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex={-1}
            id="menu-item-6"
          >
            Sign out
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default DropdownHeader;
