import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import AnnounceBar from "./components/announce-bar/AnnounceBar";
import SearchBar from "./components/search-bar/SearchBar";
import { AuthProvider } from "@/context/auth";
import { NavigationProvider } from "@/context/nav";
import Sidebar from "./components/sidebar/Sidebar";

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
            <NavigationProvider>
              <div className="flex flex-col h-screen">
                <AnnounceBar />
                <div className="md:hidden">
                  <Sidebar />
                </div>
                <Navbar />
                <SearchBar />
                <div className="flex-1">
                  {children}
                </div>
                <Footer />
              </div>
            </NavigationProvider>
          </AuthProvider>
        </body>
      </html>
  );
}
