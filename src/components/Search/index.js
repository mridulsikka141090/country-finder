import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = ({ searchValue, onSearch }) => {
    return <div className="search-container">
        <input className="search" type="search" placeholder="Search for a country..."  value={searchValue} onChange={onSearch}/>
        <div className="search-icon"><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
    </div>

}

export default Search;