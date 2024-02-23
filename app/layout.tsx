import "./globals.css";
import { StoreProvider } from "store/provider";
import { AnimationRevealPage } from "helpers";
import { SimpleSubscribeNewsletter, Header, Footer } from "components";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { headers } from 'next/headers';
import { subscribe } from "components/forms/action";

export const metadata = {
  title: "Restaurant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  // read the custom x-url header
  const pathname = headersList.get('x-url') ?? "";
  const hideLayout = ['signin'].some(substring => pathname.includes(substring))

  return (
    <html lang="en">
      <body className="bg-white antialiased text-purple-500 overflow-x-hidden high">
        <UserProvider>
          <StoreProvider>
            <ToastContainer />
            {hideLayout ? (
              children
            ) : (
              <div className="-mt-8">
              <AnimationRevealPage>
                <Header /> {children}
                <SimpleSubscribeNewsletter subscribe={subscribe} />
                <Footer />
              </AnimationRevealPage>
              </div>
            )}
          </StoreProvider>
        </UserProvider>
      </body>
    </html>
  );
}
