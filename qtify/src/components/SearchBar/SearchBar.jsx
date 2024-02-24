import React from "react";
import styles from "./SearchBar.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

function SearchBar({ search }) {
  return (
    <div className={styles.container}>
      <input className={styles.search} placeholder={search}></input>
      <button className={styles.searchButton}>
        <SearchIcon />
      </button>
    </div>
  );
}

export default SearchBar;
