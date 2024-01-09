import Icons from "@/app/ui/Icons";
import { HiOutlineChevronDown } from "react-icons/hi2";

export default function Header() {
  return (
    <div className="flex h-14 items-center justify-between border-b-2 pl-8 pr-3 text-sm font-medium">
      {/* Logo */}
      <a className="flex w-20 space-x-2 hover:opacity-60" href="#">
        <span className="w-5 h-5">
          <Icons name="vue" />
        </span>
        <span className="text-base">Vue.js</span>
      </a>

      {/* FIXME: 这里面所有的 search button 包括这个 div 高度都没有占满父级？*/}
      <div className="ml-0 flex grow justify-end">
        {/* Search */}
        {/* FIXME: 为什么我这样就能让 right1 靠着 left 呢？而去掉任意一个 grow 都不行，必须要这两个 grow */}
        {/* FIXME: 但感觉这样写的效果还是和 vue 官网的不一样 */}
        <div className="grow pl-4 font-medium">
          {/* FIXME: 内部写了 color, hover 改 color 不管用? */}
          <button className="flex items-center space-x-4  text-gray-400 hover:text-zinc-800">
            <span className="flex space-x-3 items-center">
              <Icons name="magnifying-glass" />
              <span>Search</span>
            </span>
            <span className="flex border-2 gap2 items-center text-xs rounded space-x-1 w-5 h-5">
              <kbd>
                <Icons name={"vue-doc-search-button"} />
              </kbd>
              <kbd>K</kbd>
            </span>
          </button>
        </div>
        {/* Navs */}
        <div className="flex space-x-6 items-center">
          <div className="group relative flex">
            <button className="flex items-center">
              Docs
              <HiOutlineChevronDown />
            </button>
            <div className="absolute right-0 top-10 min-w-48 hidden bg-white group-hover:block shadow-md rounded-md">
              <div className="p-y-6">
                <a className="block" href="#">
                  Guide
                </a>
                <a className="block" href="#">
                  Guide
                </a>
                <a className="block" href="#">
                  Guide
                </a>
                <a className="block" href="#">
                  Migration from Vue 2
                </a>
              </div>
            </div>
          </div>
          <a className="block" href="#">API</a>
          <a href="#">Playground</a>
          <div>
            <button>Ecosystem</button>
          </div>
          <div>
            <button>About</button>
          </div>
          <a href="#">Sponsor</a>
          <a href="#">Partners</a>
          <div>
            <button>
              <Icons name="language" />
            </button>
          </div>
        </div>
        {/* Extra */}
        <div>...</div>
      </div>
    </div>
  );
}
