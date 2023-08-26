import {useEffect, useState} from 'react'
import { endpoint } from '../lib/constants';

const useCountries = ( ) =>{
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const getCountries = async () => {
          const response = await fetch(endpoint);
          const res = await response.json();
          setCountries(res);
        };
        getCountries();
      }, []);

    return countries
}

export {useCountries}