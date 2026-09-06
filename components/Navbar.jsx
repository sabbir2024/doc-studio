"use client";

import { useState } from "react";
import { ChevronDown, LogIn } from "lucide-react";

const menuItems = [
  {
    name: "Home",
    dropdown: false,
  },
  {
    name: "Editing",
    dropdown: true,
    items: ["Excel", "Vehicle Summary"],
  },
  {
    name: "Printing",
    dropdown: true,
    items: ["OGP Print"],
  }
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <header className="w-full">
      {/* Top Header */}
      <div className="h-[51px] bg-gradient-to-r from-[#2998a4] via-[#6bb45b] to-[#0878b9] text-white">
        <div className="flex h-full items-center justify-between px-4">
          {/* Logo / Company Name */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
              <span className="text-[10px] font-bold text-[#16869b]">
                DS
              </span>
            </div>

            <h1 className="text-[19px] font-bold">
              Doc Studio
            </h1>
          </div>

          {/* Date Time */}
          <div className="text-[20px] font-bold tracking-wide">
            06-09-2026 03:22:47 pm
          </div>

          {/* Back in EBS */}
          <button className="flex items-center gap-2 text-sm font-medium hover:text-gray-200">
            <LogIn size={19} strokeWidth={2} />
            <span>Back</span>
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="h-[48px] bg-[#292f33]">
        <div className="flex h-full items-stretch">
          {menuItems.map((menu, index) => {
            const isOpen = openMenu === index;

            return (
              <div
                key={menu.name}
                className="relative"
                onMouseEnter={() => menu.dropdown && setOpenMenu(index)}
                onMouseLeave={() => menu.dropdown && setOpenMenu(null)}
              >
                <button
                  className={`
                    flex h-full items-center gap-5 border-l border-[#41474b]
                    px-5 text-[14px] font-medium text-white transition
                    ${
                      index === 0
                        ? "bg-[#292f33]"
                        : isOpen
                        ? "bg-[#202529]"
                        : "bg-[#292f33]"
                    }
                    hover:bg-[#202529]
                  `}
                  onClick={() =>
                    menu.dropdown &&
                    setOpenMenu(isOpen ? null : index)
                  }
                >
                  <span>{menu.name}</span>

                  {menu.dropdown && (
                    <ChevronDown
                      size={16}
                      strokeWidth={2}
                      className={`transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Dropdown */}
                {menu.dropdown && isOpen && (
                  <div className="absolute left-0 top-full z-50 min-w-[180px] overflow-hidden border border-gray-200 bg-white shadow-lg">
                    {menu.items.map((item) => (
                      <button
                        key={item}
                        className="block w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
}