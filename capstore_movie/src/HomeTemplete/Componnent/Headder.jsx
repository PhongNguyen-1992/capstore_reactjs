import React from "react";

export default function Header() {
  return (
    <nav className=" shadow-md bg-gray-900 shadow-md text-white rounded-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 text-2xl font-bold text-yellow-400">
            PANDA
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-yellow-400 transition">
              Phim Việt
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              Hành Động
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              Tâm Lý
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              Hoạt Hình
            </a>
          </div>

          {/* Search */}
          <div className="hidden md:block relative">
            <input
              type="text"
              placeholder="Tìm phim..."
              className="bg-gray-800 text-white border border-gray-600 rounded-full px-4 py-1 pl-10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <svg
              className="w-5 h-5 absolute left-3 top-2.5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >              
            </svg>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
