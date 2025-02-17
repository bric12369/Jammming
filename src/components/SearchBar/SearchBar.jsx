import React, { useState } from 'react';
import styles from './SearchBar.module.css'

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        if (searchTerm) {
            onSearch(searchTerm);
        }
    };

    return(
        <div className={styles.searchBar}>
            <input 
            type="text" 
            id="searchBar" 
            placeholder="Search for your favourite songs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;