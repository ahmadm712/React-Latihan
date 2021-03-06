import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand bg-white">
        <div className="container">
          <ul className="nav">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/denojs/denojs-original-wordmark.svg"
              alt=""
              style={{ height: "40px" }}
            />
          
          <li>
            <Link to ="/" className="nav-link text-dark">
              Beranda
            </Link>
          </li>
          <li>
            <Link to ="/manajemen-buku" className="nav-link text-dark">
              Manajemen Buku
            </Link>
          </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
