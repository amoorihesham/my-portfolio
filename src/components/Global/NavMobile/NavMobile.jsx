"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import Link from "next/link";
import {
  faHome,
  faInfo,
  faPhone,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

function NavMobile() {
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
    <nav className="nav-mobile">
      <div className="container">
        <ul className="links-container">
          {links.map((navLink) => (
            <li key={navLink.text}>
              <Link
                className={`${path === navLink.href ? "active" : ""}`}
                aria-current="page"
                href={navLink.href}
              >
                {navLink.text == "Home" ? (
                  <FontAwesomeIcon icon={faHome} size="lg" fixedWidth={true} />
                ) : navLink.text == "About" ? (
                  <FontAwesomeIcon icon={faInfo} size="lg" fixedWidth={true} />
                ) : navLink.text == "Projects" ? (
                  <FontAwesomeIcon
                    icon={faProjectDiagram}
                    size="lg"
                    fixedWidth={true}
                  />
                ) : navLink.text == "Contact" ? (
                  <FontAwesomeIcon icon={faPhone} size="lg" fixedWidth={true} />
                ) : (
                  ""
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavMobile;
