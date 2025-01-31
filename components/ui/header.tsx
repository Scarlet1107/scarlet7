"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Home, Info, Code, Mail, Globe } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import FadeIn from "../motion/FadeIn";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const items = [
    { title: "App Overview", href: "#app", icon: Home },
    { title: "About", href: "#about", icon: Info },
    { title: "Tech Stack", href: "#tech", icon: Code },
    { title: "Contact", href: "#contact", icon: Mail },
  ];

  const isJapanese = pathname.startsWith("/ja");
  const switchLanguageText = isJapanese ? "Switch to English" : "日本語で表示";
  const switchLanguageHref = isJapanese
    ? pathname.replace(/^\/ja/, "/en")
    : pathname.replace(/^\/en/, "/ja");

  return (
    <>
      <nav className="text-white fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto">
          <div className="flex items-center justify-between px-4 md:px-0 md:justify-around h-16">
            <FadeIn>
              <Link href="#home" className="text-xl font-bold">
                Scarlet.net
              </Link>
            </FadeIn>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {items.map((item, index) => (
                  <FadeIn key={index}>
                    <Link
                      href={item.href}
                      className="px-3 py-2 rounded-md font-medium text-lg before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-scarlet before:transition-all before:duration-300 relative before:ease-in-out hover:before:w-full flex items-center"
                    >
                      <item.icon className="w-5 h-5 mr-2" />
                      {item.title}
                    </Link>
                  </FadeIn>
                ))}
                <FadeIn>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="px-3 py-2 rounded-md font-medium text-lg flex items-center">
                      <Globe className="w-5 h-5 mr-2" />
                      Language
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Link href={switchLanguageHref} className="w-full">
                          {switchLanguageText}
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </FadeIn>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {items.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                    }}
                  >
                    <Link
                      href={item.href}
                      className="bg-gray-700 px-3 py-2 rounded-md text-base font-medium flex items-center"
                      onClick={toggleMenu}
                    >
                      <item.icon className="w-5 h-5 mr-2" />
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    duration: 0.3,
                    delay: items.length * 0.1,
                  }}
                >
                  <Link
                    href={switchLanguageHref}
                    className="bg-gray-700 px-3 py-2 rounded-md text-base font-medium flex items-center"
                    onClick={toggleMenu}
                  >
                    <Globe className="w-5 h-5 mr-2" />
                    {switchLanguageText}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
