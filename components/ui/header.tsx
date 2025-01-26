"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const items = [
    { title: "Home", href: "#" },
    { title: "アプリ紹介", href: "#app" },
    { title: "About Me", href: "#about" },
    { title: "技術スタック", href: "#tech" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="text-white fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="#" className="text-xl font-bold">
                Scarlet.net
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {items.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="px-3 py-2 rounded-md font-medium text-lg before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-scarlet before:transition-all before:duration-300 relative before:ease-in-out hover:before:w-full"
                  >
                    {item.title}
                  </Link>
                ))}
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

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {items.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
