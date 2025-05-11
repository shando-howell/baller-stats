import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import AnnounceBar from "./components/announce-bar/AnnounceBar";
import SearchBar from "./components/search-bar/SearchBar";

export const metadata: Metadata = {
  title: "Baller Fit",
  description: "An ecommerce app to get merch for the #1 NBA team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body>
          <div className="flex flex-col h-screen">
            <AnnounceBar />
            <Navbar />
            <SearchBar />
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </div>
        </body>
      </html>
  );
}
