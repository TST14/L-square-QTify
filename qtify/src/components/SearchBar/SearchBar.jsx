import React from "react";
import styles from "./SearchBar.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

function SearchBar() {
  return (
    <div className={styles.container}>
      <input
        name="search"
        className={styles.search}
        placeholder="Enter an Album"
      />
      <button className={styles.searchButton}>
        <SearchIcon />
      </button>
    </div>
  );
}

export default SearchBar;
