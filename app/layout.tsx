import { Header } from "./components/Header";
import { Footer } from "./Footer";
// CSS is processed by Next.js; TypeScript may not have a declaration for it.
// @ts-expect-error Next.js handles this side-effect stylesheet import.
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core';
// CSS is processed by Next.js; TypeScript may not have a declaration for it.
// @ts-expect-error Next.js handles this side-effect stylesheet import.
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
       <main className="flex justify-center items-center">
         {children}
        </main>
      <Footer/>
      </body>
    </html>
  )
}