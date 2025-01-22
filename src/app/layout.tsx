import type { Metadata } from "next";
import "./globals.css";
import { FloatingDock } from "./components/navbar/navbar"; 
import {
  IconUserFilled,
  IconBuildingStore,
  IconHome,
} from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Frxsh",
  description: "For the Students by the Students",
};

export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Products",
      icon: (
        <IconBuildingStore className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "SignIn",
      icon: (
        <IconUserFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <html lang="en">
      <body 
      > 
      <div className="fixed bottom-0 flex justify-bottom w-full z-[2000] mb-[3vh]">
       <FloatingDock items={links}/>
       </div>
        {children}
      </body>
    </html>
  );
}
