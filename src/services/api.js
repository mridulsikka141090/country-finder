import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1';

export const getCountries = async () => {
    const { data : countries } = await axios.get(`${BASE_URL}/all`);
    return countries.map(country => {
        return {
            name: country.name,
            population: country.population,
            region: country.region,
            capital: country.capital,
            flags: country.flags,
            id: country.cca3
        }
    })
}

export const getCountryById = async (id) => {
    const { data: country } = await axios.get(`${BASE_URL}/alpha/${id}`);
    return country;
}

export const getCountriesByRegion = async (region) => {
    const { data: regionalCountries } = await axios.get(`${BASE_URL}/region/${region}`);
    return regionalCountries.map(country => {
        return {
            name: country.name,
            population: country.population,
            region: country.region,
            capital: country.capital,
            flags: country.flags,
            id: country.cca3
        }
    })
}