import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ theme, toggleTheme }) => {

    return <div className="nav">
            <div></div>
            <h2>Where in the world?</h2>
            <div className="theme-container" onClick={toggleTheme}>
            { theme === 'Dark' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} /> }
            <p>{theme} Mode</p>
            </div>
    </div>
};

export default Navbar;