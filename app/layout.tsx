import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import AnnounceBar from "./components/announce-bar/AnnounceBar";
import SearchBar from "./components/search-bar/SearchBar";
import { AuthProvider } from "@/context/auth";

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
        <body className="bg-gray-100">
          <AuthProvider>
            <div className="flex flex-col h-screen">
              <AnnounceBar />
              <Navbar />
              <SearchBar />
              <div className="flex-1">
                {children}
              </div>
              <Footer />
            </div>
          </AuthProvider>
        </body>
      </html>
  );
}
