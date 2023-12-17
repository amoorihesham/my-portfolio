import Image from "next/image";
import "./navbar.css";
import Link from "next/link";

function Navbar() {
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
