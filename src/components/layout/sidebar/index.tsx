"use client";
import React, { useState } from "react";
import Image from "next/image";
import mainLogo from "../../../../public/images/Neet Guid Logo.png";
import neetDarkLogo from "../../../../public/images/neetGuideDarkLogo.png";
import Link from "next/link";
import ThemeToggle from "../ToggleTheme/theme-toggle";
import { useTheme } from "next-themes";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);
  const { resolvedTheme } = useTheme();

  return (
    <div className="flex h-screen">
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-40 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition duration-200 ease-in-out bg-white w-[350px] z-50 shadow-lg border-r border-[#10101033]`}
      >
        <div className="px-4 py-6">
          {/* <h2 className="text-2xl font-semibold">Sidebar</h2> */}
          {resolvedTheme !== "light" ? (
            <Image
              src={mainLogo}
              loading="lazy"
              width={80}
              height={80}
              alt="logo"
            />
          ) : (
            <Image
              loading="lazy"
              src={neetDarkLogo}
              width={80}
              height={80}
              alt="logo"
            />
          )}
          <nav className="mt-6">
            <div className="relative">
              <button
                onClick={() => setDropdown1Open(!dropdown1Open)}
                className={`flex items-center px-4 py-2 mt-2 text-sm text-gray-600 h-[48px] bg-${
                  dropdown1Open ? "[#D1DDF766]" : "[#F5F5F566]"
                } w-full text-left`}
              >
              </button>
              {dropdown1Open && (
                <div className="mt-2 space-y-2">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-200"
                  >
                    Dropdown Item 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-200"
                  >
                    Dropdown Item 2
                  </a>
                </div>
              )}
            </div>
            <div className="relative mt-4">
              <button
                onClick={() => setDropdown2Open(!dropdown2Open)}
                className="block px-4 py-2 mt-2 text-sm text-gray-600 rounded-lg hover:bg-gray-200 w-full text-left"
              >
                Dropdown 2
                <span className="float-right">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={`M${dropdown2Open ? "6 18L18 6" : "6 9l6 6 6-6"}`}
                    ></path>
                  </svg>
                </span>
              </button>
              {dropdown2Open && (
                <div className="mt-2 space-y-2">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-200"
                  >
                    Dropdown Item 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-200"
                  >
                    Dropdown Item 2
                  </a>
                </div>
              )}
            </div>
            <Link
              href="#"
              className="block px-4 py-2 mt-4 text-sm text-gray-600 rounded-lg hover:bg-gray-200"
            >
              Dashboard
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 mt-2 text-sm text-gray-600 rounded-lg hover:bg-gray-200"
            >
              Profile
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 mt-2 text-sm text-gray-600 rounded-lg hover:bg-gray-200"
            >
              Settings
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 mt-2 text-sm text-gray-600 rounded-lg hover:bg-gray-200"
            >
              Logout
            </Link>
          </nav>
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <header className="w-full bg-white shadow-md px-4 py-4 flex justify-between items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 focus:outline-none md:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <div className="flex items-center gap-2 ml-auto">
            <ThemeToggle />
          </div>
        </header>
        <main className="flex-1 p-6 overflow-scroll">{children}</main>
      </div>
    </div>
  );
};
export default Sidebar;
