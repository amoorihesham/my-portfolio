"use client";
import Image from "next/image";
import "./navbar.css";
import Link from "next/link";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { usePathname } from "next/navigation";

function Navbar() {
  const path = usePathname();
  const links = [
    {
      href: "/",
      text: "Home",
    },
    {
      href: "/about",
      text: "About",
    },
    {
      href: "/projects",
      text: "Projects",
    },
    {
      href: "/contact",
      text: "Contact",
    },
  ];
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" href="/">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={55}
            height={40}
            className="w-100"
            style={{ width: "auto", height: "auto" }}
          />
          <span>HESHAM</span>
        </Link>
        <div>
          <LazyMotion features={domAnimation}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {links.map((navLink) => (
                <m.li
                  initial={{ scale: 1, fontWeight: "normal", paddingRight: 0 }}
                  whileHover={{
                    scale: 1.1,
                    fontWeight: "bold",
                    paddingRight: 10,
                  }}
                  transition={{ duration: 0.08 }}
                  className="nav-item"
                  key={navLink.text}
                >
                  <Link
                    className={`${
                      path === navLink.href ? "active" : ""
                    } nav-link`}
                    aria-current="page"
                    href={navLink.href}
                  >
                    {navLink.text}
                  </Link>
                </m.li>
              ))}
            </ul>
          </LazyMotion>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
