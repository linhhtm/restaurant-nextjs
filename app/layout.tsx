"use client";
import "./globals.css";
import GlobalStyles from "styles/GlobalStyles";
import { Providers } from "store/provider";
import { AnimationRevealPage } from "helpers";
import { SimpleSubscribeNewsletter, Header, Footer } from "components";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Restaurant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ToastContainer />
          <AnimationRevealPage>
            <GlobalStyles />
            <Header />
            {children}
            <SimpleSubscribeNewsletter />
            <Footer />
          </AnimationRevealPage>
        </Providers>
      </body>
    </html>
  );
}
