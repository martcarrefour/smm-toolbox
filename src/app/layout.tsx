import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Provider } from "@/components/Providers/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SMM TOOLBOX",
  description: "smm toolbox app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <Provider>
        <body className={inter.className}>
          <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-grow container mx-auto pt-10 px-4 sm:px-6">
              {children}
            </div>

            <Footer />
          </div>
        </body>
      </Provider>
    </html>
  );
}
