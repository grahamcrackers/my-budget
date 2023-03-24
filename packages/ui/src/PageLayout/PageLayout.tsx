/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import React, { Fragment, PropsWithChildren, ReactNode, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
    Bars3BottomLeftIcon,
    CogIcon,
    HomeIcon,
    PhotoIcon,
    PlusIcon,
    RectangleStackIcon,
    Squares2X2Icon,
    UserGroupIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { classNames } from "@my-budget/common";

const sidebarNavigation = [
    { name: "Home", href: "#", icon: HomeIcon, current: false },
    { name: "All Files", href: "#", icon: Squares2X2Icon, current: false },
    { name: "Photos", href: "#", icon: PhotoIcon, current: true },
    { name: "Shared", href: "#", icon: UserGroupIcon, current: false },
    { name: "Albums", href: "#", icon: RectangleStackIcon, current: false },
    { name: "Settings", href: "#", icon: CogIcon, current: false },
];
const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Sign out", href: "#" },
];

/** The main page layout for our pages */
const PageRoot: React.FC<PropsWithChildren> = ({ children }) => (
    <div className="flex h-full">
        <div className="flex flex-col flex-1 overflow-hidden">{children}</div>
    </div>
);

const HeaderFn: React.FC<PropsWithChildren> = ({ children }) => (
    <header className="w-full">
        <div className="relative z-10 flex flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm">
            <div className="w-full">{children}</div>
        </div>
    </header>
);

const MainWrapperFn: React.FC<PropsWithChildren> = ({ children }) => (
    <div className="flex items-stretch flex-1 overflow-hidden">{children}</div>
);

/** Primary column, not sure if the section part is really needed */
const MainSectionFn: React.FC<PropsWithChildren> = ({ children }) => (
    <main className="flex-1 overflow-y-auto">
        <section aria-labelledby="primary-heading" className="flex flex-col flex-1 h-full min-w-0 lg:order-last">
            {children}
        </section>
    </main>
);

/** Secondary column (hidden on smaller screens) */
const AsideFn: React.FC<PropsWithChildren> = ({ children }) => (
    <aside className="hidden overflow-y-auto bg-white border-l border-gray-200 w-96 lg:block">{children}</aside>
);

export const Page = Object.assign(PageRoot, {
    Header: HeaderFn,
    Wrapper: MainWrapperFn,
    Main: MainSectionFn,
    Aside: AsideFn,
});
