import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";

function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.logoDiv}>
        <Logo />
      </div>
      <div className={styles.logo}></div>
      <SearchBar />
      <Button />
    </nav>
  );
}
export default Navbar;
