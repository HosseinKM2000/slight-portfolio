"use client";
import { LinksType } from "@/src/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Transition from "../transition";

const Navigation = () => {
  const links: LinksType[] = [
    { title: "Home", link: "/" },
    { title: "About", link: "about" },
    { title: "Portfolio", link: "add-portfolio" },
  ];
  const [isRouting, setIsRouting] = useState<boolean>(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState<string>("/");

  useEffect(() => {
    if (path !== prevPath) {
      setIsRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  return (
    <>
      {isRouting && <Transition />}
      <nav className="min-w-[10rem] py-10 rounded-t-[4rem] left-1/2 transform translate-x-[-50%] bg-[#00000053] border-white border fixed bottom-0">
        <ul className="flex items-center mx-auto w-fit gap-x-10 px-5">
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.link}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
