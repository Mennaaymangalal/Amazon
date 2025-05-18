import React, { useState } from "react";
import { Input } from "@heroui/react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/imges/header-logo.png";
import shoppingCart from "../../assets/icons/shopping-cart.png";
import { Link } from "react-router-dom";

export const SearchIcon = ({
  size = 24,
  strokeWidth = 1.5,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={height || size}
      role="presentation"
      viewBox="0 0 24 24"
      width={width || size}
      {...props}
      className="text-black bg-[#F3A847] rounded-none h-full px-2 cursor-pointer"
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#131921] text-white py-2 px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Left: Toggle + Logo */}
      <div className="flex py-2 md:py-0 px-4 items-center w-full md:w-auto justify-between">
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-9 h-9" /> : <Menu className="w-9 h-9" />}
        </button>
        <div className="w-[120px]  shrink-0">
          <img src={logo} alt="logo" className="w-full object-contain" />
        </div>
      </div>

      {/* Middle: Search Input */}
      <div className="w-full md:flex-1 pl-6 md:pl-4">
        <Input
          classNames={{
            base: "w-full h-10",
            mainWrapper: "h-full",
            input: "text-sm font-light placeholder-white text-black",
            inputWrapper:
              "h-full w-full rounded-none pe-0 font-normal bg-white flex items-center",
          }}
          placeholder="Search Amazon.eg"
          size="sm"
          endContent={<SearchIcon size={35} />}
          type="search"
        />
      </div>

      {/* Right: Desktop Menu */}
      <div className="hidden md:flex  gap-6 text-left items-center">
        <Link to={'login'} className="flex flex-col items-start">
          <p className="text-sm font-light">Hello Guest</p>
          <h3 className="text-sm font-semibold">Sign in</h3>
        </Link>
        <Link to={'orders'} className="flex flex-col items-start">
          <p className="text-sm font-light">Returns</p>
          <h3 className="text-sm font-semibold">& Orders</h3>
        </Link>
        <div className="flex flex-col items-start">
          <p className="text-sm font-light">Your</p>
          <h3 className="text-sm font-semibold">Prime</h3>
        </div>
        <Link to={'cart'} className="flex items-center">
          <img src={shoppingCart} alt="shopping cart" className="w-6 h-6" />
          <p className="text-sm font-light ps-2">4</p>
        </Link>
      </div>

      {/* Right: Mobile Dropdown Menu (row layout) */}
      {isMenuOpen && (
        <div className="w-full px-6 flex flex-row justify-between items-center gap-4 lg:hidden">
          <div className="flex flex-col items-center">
            <p className="text-sm font-light">Hello Guest</p>
            <h3 className="text-sm font-semibold">Sign in</h3>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm font-light">Returns</p>
            <h3 className="text-sm font-semibold">& Orders</h3>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm font-light">Your</p>
            <h3 className="text-sm font-semibold">Prime</h3>
          </div>
          <div className="flex items-center">
            <img src={shoppingCart} alt="shopping cart" className="w-6 h-6" />
            <p className="text-sm font-light ps-2">4</p>
          </div>
        </div>
      )}
    </div>
  );
}


 