import Icons from "@/app/ui/Icons";
import {
  ArrowUpRightIcon,
  ChevronDownIcon,
  EllipsisHorizontalIcon,
  LanguageIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const navs = [
  {
    name: "Docs",
    children: [
      {
        label: "a",
        name: "Guide",
        href: "#",
        hasLinkIcon: false,
      },
      {
        label: "a",
        name: "Tutorial",
        href: "#",
        hasLinkIcon: false,
      },
      {
        label: "a",
        name: "Examples",
        href: "#",
        hasLinkIcon: false,
      },
      {
        label: "a",
        name: "Quick Start",
        href: "#",
        hasLinkIcon: false,
      },
      {
        label: "a",
        name: "Glossary",
        href: "#",
        hasLinkIcon: false,
      },
      {
        label: "a",
        name: "Error Reference",
        href: "#",
        hasLinkIcon: false,
      },
      {
        label: "a",
        name: "Vue 2 Docs",
        href: "#",
        hasLinkIcon: true,
      },
      {
        label: "a",
        name: "Migration from Vue 2",
        href: "#",
        hasLinkIcon: true,
      },
    ],
  },
  {
    name: "API",
    href: "#",
  },
  {
    name: "Playground",
    href: "#",
  },
  {
    name: "Ecosystem",
    children: [
      {
        label: "title",
        name: "RESOURCES",
      },
      {
        name: "Partners",
        href: "#",
        hasLinkIcon: false,
      },
      {
        name: "Themes",
        href: "#",
        hasLinkIcon: false,
      },
      {
        name: "UI Components",
        href: "#",
        hasLinkIcon: true,
      },
      {
        name: "Certification",
        href: "#",
        hasLinkIcon: true,
      },
      {
        name: "Jobs",
        href: "#",
        hasLinkIcon: true,
      },
      {
        name: "T-Shirt Shop",
        href: "#",
        hasLinkIcon: true,
      },
      {
        label: "title",
        name: "OFFICIAL LIBRARIES",
      },
      {
        name: "Vue Router",
        href: "#",
        hasLinkIcon: true,
      },
      {
        name: "Pinia",
        href: "#",
        hasLinkIcon: true,
      },
      {
        name: "Tooling Guide",
        href: "#",
        hasLinkIcon: false,
      },
      {
        label: "title",
        name: "VIDEO COURSES",
      },
      {
        name: "Vue Mastery",
        href: "#",
        hasLinkIcon: true,
      },
      {
        name: "Vue School",
        href: "#",
        hasLinkIcon: true,
      },
      {
        label: "title",
        name: "HELP",
      },
      {
        name: "Discord Chat",
        href: "#",
        hasLinkIcon: true,
      },
      {
        name: "Github Discussions",
        href: "#",
        hasLinkIcon: true,
      },
      {
        name: "Dev Community",
        href: "#",
        hasLinkIcon: true,
      },
      {
        label: "title",
        name: "NEWS",
      },
      {
        name: "Blog",
        href: "#",
        hasLinkIcon: true,
      },
      {
        name: "Twitter",
        href: "#",
        hasLinkIcon: true,
      },
      {
        name: "Events",
        href: "#",
        hasLinkIcon: true,
      },
      {
        name: "News Letters",
        href: "#",
        hasLinkIcon: false,
      },
    ],
  },
  {
    name: "About",
    children: [
      {
        name: "FAQ",
        href: "#",
        hasLinkIcon: false,
      },
      {
        name: "Team",
        href: "#",
        hasLinkIcon: false,
      },
      {
        name: "Releases",
        href: "#",
        hasLinkIcon: false,
      },
      {
        name: "Community Guide",
        href: "#",
        hasLinkIcon: false,
      },
      {
        name: "Code of Conduct",
        href: "#",
        hasLinkIcon: false,
      },
      {
        name: "The Documentary",
        href: "#",
        hasLinkIcon: true,
      },
    ],
  },
  {
    name: "Sponsor",
    href: "#",
  },
  {
    name: "Partners",
    href: "#",
  },
];

const languages = [
  {
    name: "简体中文",
    href: "#",
    hasLinkIcon: true,
    icon: getGithubIcon("简体中文 Repository"),
  },
  {
    name: "日本語",
    href: "#",
    hasLinkIcon: true,
    icon: getGithubIcon("日本語 Repository"),
  },
  {
    name: "Українська",
    href: "#",
    hasLinkIcon: true,
    icon: getGithubIcon("Українська Repository"),
  },
  {
    name: "Français",
    href: "#",
    hasLinkIcon: true,
    icon: getGithubIcon("Français Repository"),
  },
  {
    name: "한국어",
    href: "#",
    hasLinkIcon: true,
    icon: getGithubIcon("한국어 Repository"),
  },
  {
    name: "Português",
    href: "#",
    hasLinkIcon: true,
    icon: getGithubIcon("Português Repository"),
  },
  {
    name: "বাংলা",
    href: "#",
    hasLinkIcon: true,
    icon: getGithubIcon("বাংলা Repository"),
  },
  {
    name: "Italiano",
    href: "#",
    hasLinkIcon: true,
    icon: getGithubIcon("Italiano Repository"),
  },
  {
    label: "a",
    name: "Help Us Translate!",
    href: "#",
    hasLinkIcon: false,
    isTail: true,
  },
];

function getGithubIcon(title: string) {
  return (
    <a className="flex w-4 h-4" title={title}>
      <Icons name="github" />
    </a>
  );
}

function getDropdownNavs(
  items: {
    name: string;
    label?: string;
    href?: string;
    hasLinkIcon?: boolean;
    icon?: React.JSX.Element;
    isTail?: boolean;
    jsx?: React.JSX.Element;
  }[],
) {
  return (
    <div className="max-h-[464px] absolute border right-0 top-10 overflow-auto min-w-52 hidden bg-white group-hover:block shadow-md rounded-md">
      <div className="flex flex-col py-3 justify-center px-4">
        {items.map((item, index) => {
          if (item.label === "title") {
            return (
              <div key={item.name}>
                {index !== 0 && <div className="border-b my-2"></div>}
                <span className="text-gray-400 text-xs h-7 my-1">
                  {item.name}
                </span>
              </div>
            );
          } else if (item.jsx) {
            return <div key={item.name}>{item.jsx}</div>;
          } else {
            return (
              <div key={item.name}>
                {item.isTail && <div className="border-b my-2"></div>}
                <div className="flex justify-between items-center">
                  <a
                    className="flex items-center justify-center text-gray-500 h-7 hover:text-green-500"
                    href={item.href}
                  >
                    <div className="flex items-center">
                      {item.name}
                      {item.hasLinkIcon && (
                        <ArrowUpRightIcon className="h-2 ml-1" />
                      )}
                    </div>
                  </a>
                  {item.icon}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div className="flex h-14 items-center justify-between border-b-2 pl-8 pr-3 text-sm font-medium">
      {/* Logo */}
      <a
        className="flex h-full items-center w-20 space-x-2 hover:opacity-60"
        href="#"
      >
        <span className="w-5 h-5">
          <Icons name="vue" />
        </span>
        <span className="text-base">Vue.js</span>
      </a>

      <div className="ml-0 flex grow justify-end items-center h-full">
        {/* Search */}
        <div className="group grow pl-4 font-medium flex h-full items-center">
          <button className="flex items-center h-full space-x-2  text-gray-500">
            <span className="flex space-x-3 h-6 items-center group-hover:text-zinc-800">
              <MagnifyingGlassIcon className="h-4" />
              <span>Search</span>
            </span>
            <div className="flex group-hover:text-green-500 group-hover:border-green-500 border gap2 items-center text-xs h-5 text-gray-400 rounded space-x-1 p-1.5">
              Ctrl K
            </div>
          </button>
        </div>
        {/* Navs */}
        <div className="flex space-x-6 items-center h-full">
          {navs.map((item) => {
            if (!item.children) {
              return (
                <a
                  key={item.name}
                  className="flex items-center h-full hover:text-green-500"
                  href={item.href}
                >
                  {item.name}
                </a>
              );
            } else {
              return (
                <div key={item.name} className="group relative flex h-full">
                  <button className="flex items-center h-full space-x-2 hover:text-gray-500">
                    <span>{item.name}</span>
                    <ChevronDownIcon className="h-3 w-3" />
                  </button>
                  {getDropdownNavs(item.children)}
                </div>
              );
            }
          })}
          {/* Language */}
          <div className="flex h-full">
            <button className="flex group relative h-full items-center">
              <div className="flex border-l border-r p-2 h-5 items-center">
                <LanguageIcon className="h-5" />
              </div>
              {getDropdownNavs(languages)}
            </button>
          </div>
        </div>
        {/* Extra */}
        <div className="flex h-full group relative items-center">
          <button className="flex h-full items-center">
            <EllipsisHorizontalIcon className="h-6 px-3" />
          </button>
          {getDropdownNavs([
            {
              name: "appearance",
              jsx: (
                <div className="flex justify-between items-center">
                  Appearance
                  <input
                    type="checkbox"
                    name="toggle"
                    id="toggle"
                    className="toggle-checkbox my-2 w-8 h-5 rounded-xl bg-white border-4 appearance-none cursor-pointer"
                  />
                </div>
              ),
            },
            {
              name: "links",
              jsx: (
                <div className="h-full">
                  <div className="border-b my-2"></div>
                  <div className="flex mt-4 mb-2 h-full space-x-4 fill-gray-400">
                    {[
                      { icon: "github", name: "Github" },
                      { icon: "twitter", name: "Twitter" },
                      { icon: "discord", name: "Discord" },
                    ].map((item) => (
                      <button
                        key={item.icon}
                        className="w-5 h-5 hover:fill-gray-800"
                        title={item.name}
                      >
                        <Icons name={item.icon} />
                      </button>
                    ))}
                  </div>
                </div>
              ),
            },
          ])}
        </div>
      </div>
    </div>
  );
}
