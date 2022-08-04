import React, { useEffect, useState, useRef } from 'react'
import { useParams } from "react-router-dom";
import { getCountryById } from '../../services/api';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Link } from 'react-router-dom';

const DetailPage = ({ theme, toggleTheme }) => {
    const { id } = useParams();
    const [country, setCountry] = useState({});
    const [borderData, setBorderData] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        (async () => {
            const country = await getCountryById(id);
            setCountry(country?.[0]);
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onBackButton = () => {
        navigate('/');
    };

    const firstLoad = useRef(true);
    useEffect(() => {
        // do something
        if (firstLoad.current) {
            firstLoad.current = false;
            // window.location.reload(false);
        } else {
            window.location.reload(false);
        }
    }, [id]);


    const { flags: { png: image = '' } = {},
        name: { common = '',
            nativeName: {
                nld: { common: native = '', } = {} } = {}
        } = {},
        population = '',
        region = '',
        subregion = '',
        capital = '',
        tld = [],
        currencies = [],
        languages = [],
        borders = [],
    } = country;

    useEffect(() => {
        if (Object.keys(country).length) {
            (async () => {
                const borderData = await Promise.all(borders.map(async (border) => {
                    const data = await getCountryById(border);
                    return data?.[0];
                }));
                setBorderData(borderData);
            })();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [country])

    return <div>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <div className="detail-container">
            <Button text="Back" onClick={onBackButton}>
                <FontAwesomeIcon icon={faArrowLeftLong} />
            </Button>
            <div className="detail-body">
                <div className="detail-image">
                    <img src={image} alt="" />
                </div>
                <div className="details">
                    <h2>{common}</h2>
                    <div className="detail-grid">
                        <div className="detail-grid-1">
                            <p>Native Name: <span>{native}</span></p>
                            <p>Population: <span>{population.toLocaleString()}</span></p>
                            <p>Region: <span>{region}</span></p>
                            <p>Sub Region: <span>{subregion}</span></p>
                            <p>Capital: <span>{capital}</span></p>
                        </div>
                        <div className="detail-grid-2">
                            <p>Top Level Domain: <span>{tld.join(', ')}</span></p>
                            <p>Currencies: <span>{Object.entries(currencies).map(currency => {
                                return currency[1];
                            })[0]?.name}</span></p>
                            <p>Languages: <span>
                                {Object.entries(languages).map(language => {
                                    return language[1];
                                }).join(', ')}
                            </span></p>
                        </div>
                    </div>
                    {borderData.length ? <div className="detail-countries">
                        <p>Border Countries: </p>
                        {borderData?.map(border => {
                            return <Link to={`/country/${border?.cca3}`}><div className="borders"><Button text={border?.name?.common} /></div></Link>
                        })}

                    </div> : null}
                </div>
            </div>
        </div>
    </div>
};

export default DetailPage;