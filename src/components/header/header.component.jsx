import "./header.styles.css";

import BurgerMenuImg from "../../assets/burgerMenu.svg";
import { useState } from "react";

export default function Header() {
  const [navMobileOpen, setNavMobileOpen] = useState(false);

  const openMobileNav = () => {
    setNavMobileOpen(!navMobileOpen)
  }

  return (
    <>
    <header>
      <h2>Your app</h2>
      <nav className="header__nav--desktop">
        <a href="/">Menu</a>
        <a href="/">Locations</a>
        <a href="/">Contact</a>
        <a href="/">Reservations</a>
      </nav>
      <img src={BurgerMenuImg} alt="Mobile Nav" onClick={openMobileNav} />
      {navMobileOpen && (
        <nav className="header__nav--mobile">
          <a href="/">Menu</a>
          <a href="/">Locations</a>
          <a href="/">Contact</a>
          <a href="/">Reservations</a>
        </nav>
      )}
    </header>
    <p></p>
    
    </>
  );
}
