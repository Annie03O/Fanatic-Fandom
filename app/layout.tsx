import { BreadcrumpNav } from "./components/Layout/BreadcrumpNav";
import { Header } from "./components/Layout/Header";
import { SideBar } from "./components/Layout/SideBar";
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
       <main className="flex justify-center items-stretch">
         <section className="w-fit shrink-0 hidden md:flex flex-col items-stretch">
          <SideBar side="left"/>
          </section>
          <article className="w-full flex flex-col justify-center items-center bg-black text-[#d1c3e3]">
            <BreadcrumpNav/>
              <section className="w-[95%] h-full">
                {children}
              </section>
            </article>
         <section className="w-fit shrink-0 hidden md:flex flex-col items-stretch">
          <SideBar side="right"/>
          </section>
        </main>
      <Footer/>
      </body>
    </html>
  )
}