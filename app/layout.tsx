"use client";
import "./globals.css";
import GlobalStyles from "styles/GlobalStyles";
import { StoreProvider } from "store/provider";
import { AnimationRevealPage } from "helpers";
import { SimpleSubscribeNewsletter, Header, Footer } from "components";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePathname } from "next/navigation";
import { UserProvider } from "@auth0/nextjs-auth0/client";

// export const metadata = {
//   title: "Restaurant",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideLayout = ["/signin"].includes(pathname);
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <StoreProvider>
            <ToastContainer />
            <GlobalStyles />
            {hideLayout ? (
              children
            ) : (
              <AnimationRevealPage>
                <Header /> {children}
                <SimpleSubscribeNewsletter />
                <Footer />
              </AnimationRevealPage>
            )}
          </StoreProvider>
        </UserProvider>
      </body>
    </html>
  );
}
