"use client";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";

import { Button } from "@/components/ui/button";
import { profile } from "@/lib/portfolio";
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const menuButton = useRef<HTMLButtonElement>(null);
  const links = [
    { href: "/work", label: "Work" },
    { href: "/#experience", label: "Experience" },
    { href: "/#skills", label: "Skills" },
    { href: "/#about", label: "About" },
    { href: "/credentials", label: "Credentials" },
  ];
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <div className="shell header-inner">
        <Link
          className="wordmark"
          href="/"
          onClick={() => setOpen(false)}
          aria-label="Abhay Raj Dunerya, home"
        >
          abhay<span className="text-brand">.</span>
          <span className="wordmark-surname">raj dunerya</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-current={link.href === path ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <a href={profile.resume} download className="resume-link">
            Résumé <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>
        <Button
          ref={menuButton}
          className="mobile-menu-button"
          variant="outline"
          size="icon"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav shell"
          aria-label="Mobile navigation"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a href={profile.resume} download onClick={() => setOpen(false)}>
            Download résumé <ArrowUpRight size={16} />
          </a>
        </nav>
      )}
    </header>
  );
}
