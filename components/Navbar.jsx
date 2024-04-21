// components/Navbar.js

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white text-xl font-bold">
              Hospital Name
            </Link>
          </div>

          {/* Hamburger icon for mobile */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
              aria-label="Toggle navigation"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5h18a1 1 0 010 2H3a1 1 0 010-2zM3 11h18a1 1 0 010 2H3a1 1 0 010-2zM3 17h18a1 1 0 010 2H3a1 1 0 010-2z"
                />
              </svg>
            </button>
          </div>

          {/* Navigation links */}
          <div className="hidden md:flex md:space-x-4">
            <Link className="text-white" href="/">
              Home
            </Link>
            <Link className="text-white" href="/services">
              Services
            </Link>
            <Link className="text-white" href="/doctors">
              Doctors
            </Link>
            <Link className="text-white" href="/about">
              About Us
            </Link>
            <Link className="text-white" href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
