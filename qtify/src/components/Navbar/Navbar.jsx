import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";

function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <SearchBar search={"Search a song of your choice"} />
      <Button />
    </nav>
  );
}
export default Navbar;
