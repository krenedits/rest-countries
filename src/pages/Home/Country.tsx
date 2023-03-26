import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { ICountry } from './types';

export default function Country(country: ICountry) {
    console.log(country);

    return (
        <Grid item>
            <Card elevation={4} sx={{ height: '100%', width: 300 }}>
                <CardMedia
                    component='img'
                    image={country.flags.svg}
                    alt={country.name.common}
                    height='200'
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        fontSize={20}
                        component='div'
                        fontWeight='bold'
                    >
                        {country.name.common}
                    </Typography>
                    <Typography variant='body2' fontSize={14}>
                        <strong>Population:</strong>{' '}
                        {country.population.toLocaleString('en-US')}
                    </Typography>
                    <Typography variant='body2' fontSize={14}>
                        <strong>Region:</strong> {country.region}
                    </Typography>
                    <Typography variant='body2' fontSize={14}>
                        <strong>Capital:</strong> {country.capital}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}
