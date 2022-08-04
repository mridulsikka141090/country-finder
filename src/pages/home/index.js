import React, { useState, useEffect, useRef } from 'react'
import Navbar from '../../components/Navbar';
import CountryCard from '../../components/CountryCard';
import Search from '../../components/Search';
import { getCountries, getCountriesByRegion } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { filterRegions } from '../../constants';
import { customStyles } from './selectStyle';

const HomePage = ({ theme, toggleTheme }) => {

    const navigate = useNavigate();
    const [countries, setCountries] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [filterSelected, setFilterSelected] = useState('');

    useEffect(() => {
        (async function () {
            const countryList = await getCountries();
            setCountries(countryList);
            setFilteredCountries(countryList);
        })();
    }, []);

    useEffect(() => {
        const filteredCountries = countries.filter(country => country.name.official.includes(searchValue));
        setFilteredCountries(filteredCountries);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue])


    const firstLoad = useRef(true);
    useEffect(() => {
        if (firstLoad.current) {
            firstLoad.current = false;
        } else {
                (async function () {
                    const countryList = await getCountriesByRegion(filterSelected);
                    setFilteredCountries(countryList);
                })();
        }


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterSelected])

    const onSearch = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value);
    }

    const onCountryClick = (country) => {
        navigate(`/country-finder/country/${country?.id}`);
    }

    const onFilterSelect = (selectedOption) => {
        setFilterSelected(selectedOption.value);
    }

    return <div>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <div className="search-filter">
            <Search searchValue={searchValue} onSearch={onSearch} />
            <div className="filter-select">
                <Select 
                    options={filterRegions} 
                    styles={customStyles(theme)} 
                    components={{
                    IndicatorSeparator: () => null
                    }} 
                    placeholder="Select By Region"
                    onChange={onFilterSelect}
                />
                {/* <FilterSelect filterSelected={filterSelected} onFilterSelect={onFilterSelect} /> */}
            </div>
        </div>
        <div className="country-list">
            {filteredCountries.map((country, index) => {
                return <CountryCard country={country} key={index} onClick={onCountryClick} />
            })}
        </div>
        <div className="code-by"><p>Challenge by Frontend Mentor. Coded By mridulsikka141090</p></div>
    </div>
};

export default HomePage;