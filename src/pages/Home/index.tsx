import { Grid } from '@mui/material';
import { Layout } from '../../components';
import Countries from './Countries';
import Filter from './Filter';
import { CountryFilter } from './types';
import { useState } from 'react';

export default function Home() {
    const countryFilterState = useState<CountryFilter>({
        name: '',
        region: '',
    });

    return (
        <Layout>
            <Grid container spacing={8}>
                <Filter countryFilterState={countryFilterState} />
                <Countries filter={countryFilterState[0]} />
            </Grid>
        </Layout>
    );
}
