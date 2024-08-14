import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchCountries } from '../services/api';
import styles from './CountryList.module.scss';

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<any[]>([]);

  useEffect(() => {
    const loadCountries = async () => {
      const data = await fetchCountries();
      setCountries(data);
    };
    loadCountries();
  }, []);

  return (
    <div className={styles.countryList}>
      {countries.map((country) => (
        <Link
          key={country.cca3}
          to={`/country/${country.name.common}`}
          className={styles.countryItem}>
          <img src={country.flags.png} alt={`${country.name.common} flag`} />
          <span>{country.name.common}</span>
        </Link>
      ))}
    </div>
  );
};

export default CountryList;
