import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ICountry } from './types';

export default function Country(country: ICountry) {
    const navigate = useNavigate();

    return (
        <Card elevation={4} sx={{ height: '100%', width: 300 }}>
            <CardActionArea onClick={() => navigate(country.cca3)}>
                <div
                    style={{
                        height: 200,
                        position: 'relative',
                    }}
                >
                    <CardMedia
                        component='img'
                        image={country.flags.svg}
                        alt={country.name.common}
                        width='100%'
                        style={{
                            position: 'absolute',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            maxHeight: '100%',
                        }}
                    />
                </div>
                <CardContent>
                    <Typography
                        gutterBottom
                        fontSize={20}
                        component='div'
                        fontWeight='bold'
                    >
                        {country.name.common}
                    </Typography>
                    <Typography variant='body2' fontSize={14} component='div'>
                        <strong>Population:</strong>{' '}
                        {country.population.toLocaleString('en-US')}
                    </Typography>
                    <Typography variant='body2' fontSize={14} component='div'>
                        <strong>Region:</strong> {country.region}
                    </Typography>
                    <Typography variant='body2' fontSize={14} component='div'>
                        <strong>Capital:</strong> {country.capital}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
