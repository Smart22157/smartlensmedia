import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <h1 className="text-2xl font-bold">SmartLens</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-semibold">
          <Link href="/">Home</Link>
          <Link href="/portfolio">Gallery photos</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/booking">
            <span className="bg-red-600 px-3 py-1 rounded hover:bg-red-700">Book Now</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4 font-semibold">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/portfolio" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href="/booking" onClick={() => setIsOpen(false)}>
            <span className="bg-red-600 px-3 py-1 rounded hover:bg-red-700">Book Now</span>
          </Link>
        </div>
      )}
    </nav>
  );
}
