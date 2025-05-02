"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link
              href="/"
              className={`flex items-center px-4 py-2 text-lg font-medium transition-colors duration-200 ${
                isActive("/")
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-600 hover:text-indigo-600"
              }`}
            >
              AIsearch
            </Link>
          </div>

          <div className="flex space-x-8">
            <Link
              href="/profession"
              className={`inline-flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive("/profession")
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-600 hover:text-indigo-600"
              }`}
            >
              职业推荐
            </Link>
            <Link
              href="/categories"
              className={`inline-flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive("/categories")
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-600 hover:text-indigo-600"
              }`}
            >
              工具分类
            </Link>
            <Link
              href="/trending"
              className={`inline-flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive("/trending")
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-600 hover:text-indigo-600"
              }`}
            >
              最新趋势
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
