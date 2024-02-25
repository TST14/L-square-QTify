import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";

function Navbar({ searchData }) {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <SearchBar
        search={"Search a song of your choice"}
        searchData={searchData}
      />
      <Button />
    </nav>
  );
}
export default Navbar;
