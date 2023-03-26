import { Search } from '@mui/icons-material';
import {
    Grid,
    Input,
    InputAdornment,
    MenuItem,
    Paper,
    Select,
    SelectChangeEvent,
} from '@mui/material';
import { FilterProps } from './types';
import { REGIONS } from './utils';

export default function Filter({ countryFilterState }: FilterProps) {
    const [countryFilter, setCountryFilter] = countryFilterState;

    const handleCountryFilterChange = (
        e:
            | SelectChangeEvent<string>
            | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setCountryFilter({
            ...countryFilter,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Grid item container xs={12} justifyContent='space-between' spacing={2}>
            <Grid item xs={12} md={4}>
                <Paper>
                    <Input
                        placeholder='Search for a country...'
                        fullWidth
                        startAdornment={
                            <InputAdornment position='start'>
                                <Search sx={{ mr: 2 }} />
                            </InputAdornment>
                        }
                        sx={{
                            padding: '1rem',
                        }}
                        name='name'
                        disableUnderline
                        value={countryFilter.name}
                        onChange={handleCountryFilterChange}
                    />
                </Paper>
            </Grid>
            <Grid item xs={6} md={4} lg={3} xl={2}>
                <Paper sx={{ height: '100%' }}>
                    <Select
                        fullWidth
                        disableUnderline
                        sx={{
                            height: '100%',
                            padding: '1rem',
                            '& .MuiSelect-icon': {
                                marginRight: '1rem',
                            },
                        }}
                        variant='standard'
                        displayEmpty
                        value={countryFilter.region}
                        name='region'
                        onChange={handleCountryFilterChange}
                        renderValue={(value) => {
                            if (value === '') {
                                return 'Filter by Region';
                            }
                            // else provide a clear indication of the selected region
                            return value;
                        }}
                    >
                        <MenuItem value=''>
                            <em>All</em>
                        </MenuItem>
                        {REGIONS.map((region) => (
                            <MenuItem key={region} value={region}>
                                {region}
                            </MenuItem>
                        ))}
                    </Select>
                </Paper>
            </Grid>
        </Grid>
    );
}
