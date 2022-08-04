import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import HomePage from "./pages/home";
import DetailPage from './pages/detail';

const App = () => {

    const [theme, setTheme] = useState('Dark');

    const toggleTheme = () => {
        theme === 'Dark' ? setTheme('Light') : setTheme('Dark');
    }

    return <Router>
        <div className={theme === 'Dark' ? 'dark' : 'light'}>
            <Routes>
                <Route exact path="/" element={<HomePage theme={theme} toggleTheme={toggleTheme} />} />
                <Route exact path="/country/:id" element={<DetailPage theme={theme} toggleTheme={toggleTheme} />} />
            </Routes>
        </div>
    </Router>
};

export default App;