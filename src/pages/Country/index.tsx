import { ArrowBack } from '@mui/icons-material';
import {
    Typography as BasicTypography,
    Button,
    Grid,
    Paper,
    TypographyProps,
} from '@mui/material';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CountryContext from '../../contexts/CountryContext';

const buttonStyle = {
    textTransform: 'none',
    backgroundColor: 'background.paper',
    color: 'text.primary',
    padding: '0.3rem 2rem',
    fontWeight: 300,
    fontSize: '16px',
    '&:hover': {
        backgroundColor: 'background.default',
        color: 'text.primary',
    },
};

const Typography = (props: TypographyProps) => (
    <BasicTypography
        sx={{
            color: 'text.primary',
        }}
        fontSize={16}
        fontWeight={300}
        {...props}
    />
);

export default function Country() {
    const { cca3 } = useParams<{ cca3: string }>();
    const navigate = useNavigate();
    const countries = useContext(CountryContext);
    const country = countries.find((country) => country.cca3 === cca3);

    if (!country) {
        return (
            <Grid
                container
                justifyContent='center'
                alignItems='center'
                sx={{ height: '100vh' }}
            >
                <Typography>Country not found</Typography>
            </Grid>
        );
    }

    return (
        <Grid container item xs={12} spacing={4}>
            <Grid item xs={12}>
                <Button
                    variant='contained'
                    startIcon={<ArrowBack />}
                    sx={buttonStyle}
                    onClick={() => navigate('/')}
                >
                    Back
                </Button>
            </Grid>
            <Grid item xs={12} container spacing={8}>
                <Grid item xs={12} md={6}>
                    <Paper
                        sx={{
                            padding: '1rem',
                            height: '100%',
                            display: 'flex',
                        }}
                    >
                        <img
                            src={country.flags.svg}
                            alt={country?.name.common}
                            style={{ width: '100%' }}
                        />
                    </Paper>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    display='flex'
                    alignItems='center'
                    container
                >
                    <Grid item xs={12}>
                        <Typography fontSize={24} fontWeight={700}>
                            {country?.name.common}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} container spacing={2} mb={2}>
                        <Grid item container xs={12} md={6}>
                            <Typography>
                                <strong>Native Name:</strong>{' '}
                                {
                                    Object.values(country.name.nativeName)[0]
                                        .common
                                }
                            </Typography>
                            <Typography>
                                <strong>Population:</strong>{' '}
                                {country.population.toLocaleString('en-US')}
                            </Typography>
                            <Typography>
                                <strong>Region:</strong> {country.region}
                            </Typography>
                            <Typography>
                                <strong>Sub region:</strong> {country.subregion}
                            </Typography>
                            <Typography>
                                <strong>Capital:</strong> {country.capital}
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            container
                            xs={12}
                            md={6}
                            alignSelf='flex-start'
                        >
                            <Typography>
                                <strong>Top level domain:</strong>{' '}
                                {country.tld[0]}
                            </Typography>
                            <Typography>
                                <strong>Currencies:</strong>{' '}
                                {Object.values(country.currencies)
                                    .map((c) => c.name)
                                    .join(', ')}
                            </Typography>
                            <Typography>
                                <strong>Languages:</strong>{' '}
                                {Object.values(country.languages).join(', ')}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} container spacing={1}>
                        <Grid item>
                            <Typography>
                                <strong>Border Countries:</strong>
                            </Typography>
                        </Grid>
                        {country.borders.map((border) => (
                            <Grid item key={border}>
                                <Button
                                    variant='contained'
                                    sx={{
                                        ...buttonStyle,
                                        padding: '0',
                                        fontSize: '14px',
                                    }}
                                    onClick={() => navigate('/' + border)}
                                >
                                    {
                                        countries.find(
                                            (country) => country.cca3 === border
                                        )?.name.common
                                    }
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
