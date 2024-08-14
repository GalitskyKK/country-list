import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountryDetails } from '../services/api';
import styles from './CountryDetails.module.scss';

const CountryDetails: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [country, setCountry] = useState<any | null>(null);

  useEffect(() => {
    const loadCountry = async () => {
      if (name) {
        const data = await fetchCountryDetails(name);
        setCountry(data[0]);
      }
    };
    loadCountry();
  }, [name]);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.countryDetails}>
      <div className={styles.countryItem}>
      <img src={country.flags.png} alt={`${country.name.common} flag`} />
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital?.[0]}</p>
      </div>
    </div>
  );
};

export default CountryDetails;
