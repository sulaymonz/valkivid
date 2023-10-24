'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="w-full z-10">
      <div className="container mx-auto px-4">
        <nav className="flex min-h-[64px] items-center justify-between py-1 lg:min-h-[90px] lg:py-4">
          <Logo />

          {/* Larger screen - navigation */}
          <ul className="hidden md:flex text-white text-sm">
            <li className="mr-4 lg:mr-8 hover:text-black">
              <Link href="/">Home</Link>
            </li>
            <li className="mr-4 lg:mr-8 hover:text-black">
              <Link href="/videos">Videos</Link>
            </li>
            <li className="mr-4 lg:mr-8 hover:text-black">
              <Link href="/news">News</Link>
            </li>
            <li className="mr-4 lg:mr-8 hover:text-black">
              <Link href="/about">About</Link>
            </li>
            <li className="mr-4 lg:mr-8 hover:text-black">
              <Link href="/events">Events</Link>
            </li>
            <li className="mr-4 lg:mr-8 hover:text-black">
              <Link href="/partners">Partners</Link>
            </li>
            <li className="mr-4 lg:mr-8 hover:text-black">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="mr-4 lg:mr-8 hover:text-black">
              <Link href="/shop">Shop</Link>
            </li>
          </ul>

          {/* Smaller screen - hamburger menu */}
          <button onClick={toggleMenu}>
            {showMenu ? (
              <svg role="image" className="fill-white w-6 h-6">
                <use href="/images/sprite.svg#menu"></use>
              </svg>
            ) : (
              <svg role="image" className="fill-white w-6 h-6">
                <use href="/images/sprite.svg#menu-close"></use>
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
