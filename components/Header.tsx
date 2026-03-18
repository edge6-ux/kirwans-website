"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/",        label: "Home"    },
  { href: "/about",   label: "About"   },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const menuDropdown = [
  { href: "/menu",        label: "Food Menu"  },
  { href: "/menu/drinks", label: "Drink Menu" },
];

const linkClass = "text-xs tracking-widest uppercase font-semibold transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#C9A86A] after:transition-all after:duration-300 hover:after:w-full hover:text-[#C9A86A]";

export default function Header() {
  const pathname              = usePathname();
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [scrolled,    setScrolled]    = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything on route change
  useEffect(() => {
    setMobileOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  const menuActive = pathname.startsWith("/menu");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0B0B0C]/95 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,0.7)] border-b border-[#C9A86A]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">

        {/* Logo */}
        <Link
          href="/"
          className="transition-all duration-300 hover:opacity-85 hover:drop-shadow-[0_0_10px_rgba(201,168,106,0.45)]"
        >
          <Image
            src="/images/logo.webp"
            alt="Kirwan's on the Wharf logo"
            height={48}
            width={160}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">

          {/* Menu dropdown */}
          <div className="relative group">
            <button
              className={`${linkClass} flex items-center gap-1 ${
                menuActive ? "text-[#C9A86A] after:w-full after:!bg-[#C9A86A]" : "text-[#F5F5F5]"
              }`}
            >
              Menu
              <svg className="w-2.5 h-2.5 mt-[1px] opacity-60 group-hover:opacity-100 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 10 6">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="absolute left-0 top-full pt-3 w-44 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
            <div className="bg-[#050608] border border-white/10 rounded-md shadow-[0_8px_32px_rgba(0,0,0,0.6)] overflow-hidden">
              {menuDropdown.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="block px-4 py-3 text-xs tracking-widest uppercase font-semibold text-[#F5F5F5] hover:text-[#C9A86A] hover:bg-white/5 transition-colors duration-150 border-b border-white/5 last:border-0"
                >
                  {label}
                </Link>
              ))}
            </div>
            </div>
          </div>

          {/* Remaining links */}
          {navLinks.slice(1).map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`${linkClass} ${active ? "text-[#C9A86A] after:w-full after:!bg-[#C9A86A]" : "text-[#F5F5F5]"}`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`block h-[1.5px] bg-[#C9A86A] transition-all duration-300 ${mobileOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6"}`} />
          <span className={`block h-[1.5px] bg-[#C9A86A] transition-all duration-300 ${mobileOpen ? "w-0 opacity-0" : "w-4"}`} />
          <span className={`block h-[1.5px] bg-[#C9A86A] transition-all duration-300 ${mobileOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-6"}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-screen bg-[#0B0B0C]/97 backdrop-blur-md border-b border-[#C9A86A]/15" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-0 pb-6">

          {/* Menu accordion */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`px-8 py-4 text-xs tracking-widest uppercase font-semibold border-b border-[#1C1C1E] transition-colors duration-200 text-left flex items-center justify-between ${menuActive ? "text-[#C9A86A]" : "text-[#F5F5F5]"}`}
          >
            Menu
            <svg className={`w-2.5 h-2.5 mr-1 opacity-60 transition-transform duration-200 ${menuOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 10 6">
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Menu sub-items */}
          <div className={`overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-40" : "max-h-0"}`}>
            {menuDropdown.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block px-12 py-3 text-xs tracking-widest uppercase font-semibold border-b border-[#1C1C1E] text-[#C7C7C7] hover:text-[#C9A86A] transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Remaining links */}
          {navLinks.slice(1).map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`px-8 py-4 text-xs tracking-widest uppercase font-semibold border-b border-[#1C1C1E] transition-colors duration-200 ${active ? "text-[#C9A86A]" : "text-[#F5F5F5] hover:text-[#C9A86A]"}`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
