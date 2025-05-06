"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              AIsearch
            </Link>
          </div>

          {/* 移动端菜单按钮 */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">打开主菜单</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* 桌面端导航 */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              href="/profession"
              className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                isActive("/profession")
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              职业推荐
            </Link>
            <Link
              href="/categories"
              className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                isActive("/categories")
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              工具分类
            </Link>
            <Link
              href="/trending"
              className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                isActive("/trending")
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              最新趋势
            </Link>
          </div>
        </div>
      </div>

      {/* 移动端导航菜单 */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/profession"
            className={`block px-3 py-2 rounded-md text-base font-medium whitespace-nowrap ${
              isActive("/profession")
                ? "text-blue-600 bg-blue-50"
                : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
            }`}
            onClick={() => setIsOpen(false)}
          >
            职业推荐
          </Link>
          <Link
            href="/categories"
            className={`block px-3 py-2 rounded-md text-base font-medium whitespace-nowrap ${
              isActive("/categories")
                ? "text-blue-600 bg-blue-50"
                : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
            }`}
            onClick={() => setIsOpen(false)}
          >
            工具分类
          </Link>
          <Link
            href="/trending"
            className={`block px-3 py-2 rounded-md text-base font-medium whitespace-nowrap ${
              isActive("/trending")
                ? "text-blue-600 bg-blue-50"
                : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
            }`}
            onClick={() => setIsOpen(false)}
          >
            最新趋势
          </Link>
        </div>
      </div>
    </nav>
  );
}
