import { Grid } from '@mui/material';
import { useState } from 'react';
import Countries from './Countries';
import Filter from './Filter';
import { CountryFilter } from './types';

export default function Home() {
    const countryFilterState = useState<CountryFilter>({
        name: '',
        region: '',
    });

    return (
        <Grid container spacing={8}>
            <Filter countryFilterState={countryFilterState} />
            <Countries filter={countryFilterState[0]} />
        </Grid>
    );
}
