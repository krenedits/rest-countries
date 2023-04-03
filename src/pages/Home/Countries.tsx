import { Grid, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import CountryContext from '../../contexts/CountryContext';
import Country from './Country';
import { CountriesProps } from './types';

export default function Countries({ filter }: CountriesProps) {
    const [numCountries, setNumCountries] = useState(12);
    const countries = useContext(CountryContext);
    console.log(countries);

    useEffect(() => {
        setNumCountries(12);
    }, [filter]);

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

    const countriesToDisplay = [...countries]
        ?.sort((a, b) => a.name.common.localeCompare(b.name.common))
        .filter(
            (country) =>
                country.name.common
                    .toLowerCase()
                    .includes(filter.name.toLowerCase()) &&
                (filter.region === '' || country.region === filter.region)
        )
        .slice(0, numCountries);

    return (
        <Grid item xs={12} container spacing={10} justifyContent='center'>
            {countriesToDisplay.length > 0 ? (
                countriesToDisplay.map((country) => (
                    <Grid item key={country.name.common}>
                        <Country {...country} />
                    </Grid>
                ))
            ) : (
                <Grid item xs={12}>
                    <Typography
                        textAlign='center'
                        color='text.secondary'
                        variant='h5'
                    >
                        No countries found
                    </Typography>
                </Grid>
            )}
        </Grid>
    );
}
