import React from 'react'

const CountryCard = ({ country, onClick }) => {

    const  { name, population, region, capital, flags } = country;
    
    return <div className="img-card" onClick={() => onClick(country)}>
    <div className="card-content">
        <div className="card-image">
            <img src={flags?.png} alt=""/>
        </div>
        
        <div className="card-body">   
        <h3>{name?.common}</h3>
        <p className="card-text"><span>Population: </span><span className="country-details">{population?.toLocaleString()}</span></p>
        <p className="card-text"><span>Region: </span><span className="country-details">{region}</span></p>
        <p className="card-text"><span>Capital: </span><span className="country-details">{capital?.[0]}</span></p>
        </div>
    </div>
</div> 
}

export default CountryCard;