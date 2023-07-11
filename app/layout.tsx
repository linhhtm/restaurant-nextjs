import "./globals.css";
import { Inter } from "next/font/google";
import GlobalStyles from "styles/GlobalStyles";
import { Providers } from "store/provider";
import { AnimationRevealPage } from "helpers";
import { SimpleSubscribeNewsletter, Header, Footer } from "components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Restaurant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Providers>
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
