import React from "react";
import styles from "./SearchBar.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

function SearchBar({ search }) {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    // <div className={styles.container}>
    //   <input className={styles.search} placeholder={search}></input>
    //   <button className={styles.searchButton}>
    //     <SearchIcon />
    //   </button>
    // </div>
    <form className={styles.container} onSubmit={onSubmit}>
      <input className={styles.search} required placeholder={search} />
      <button className={styles.searchButton} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}

export default SearchBar;
