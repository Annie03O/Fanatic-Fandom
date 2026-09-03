<<<<<<< HEAD
import { Header } from "./components/Header";
import { Footer } from "./Footer";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Header/>
        {children}
      <Footer/>
      </body>
=======
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";


export default function RootLayout({ children } : { children: React.ReactNode }) {
  return (
    <html
    className="font-serif"
      lang="en"
    >
<<<<<<< HEAD
      <body className="min-h-full flex flex-col">{children}</body>
>>>>>>> d847065 (Initial commit from Create Next App)
=======
      
      <body className=" flex flex-col items-center justify-start text-white">
        <Header/>
        {children}
      </body>
>>>>>>> 4b79439 (Cleaning worktree)
    </html>
  );
}
