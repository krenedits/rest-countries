import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import endpoints from '../../utils/endpoints';
import Country from './Country';
import { CountriesProps, ICountry } from './types';

export default function Countries({ filter }: CountriesProps) {
    const { data, loading } = useFetch<ICountry[]>(endpoints.all);
    const [numCountries, setNumCountries] = useState(12);

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = document.documentElement.scrollTop;
            const clientHeight = document.documentElement.clientHeight;

            if (scrollTop + clientHeight >= scrollHeight) {
                setNumCountries((prev) => prev + 12);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Grid item xs={12} container spacing={10} justifyContent='center'>
            {loading ? (
                <p>Loading...</p>
            ) : (
                data
                    ?.filter(
                        (country) =>
                            country.name.common
                                .toLowerCase()
                                .includes(filter.name.toLowerCase()) &&
                            (filter.region === '' ||
                                country.region === filter.region)
                    )
                    .slice(0, numCountries)
                    .sort((a, b) => a.name.common.localeCompare(b.name.common))
                    .map((country) => (
                        <Country key={country.name.common} {...country} />
                    ))
            )}
        </Grid>
    );
}
