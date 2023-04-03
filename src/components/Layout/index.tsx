import { DarkMode, DarkModeOutlined } from '@mui/icons-material';
import {
    AppBar,
    CircularProgress,
    Container,
    Grid,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material';
import { useContext } from 'react';
import ModeContext from '../../contexts/ModeContext';
import theme from '../../utils/theme';
import { Outlet } from 'react-router-dom';
import endpoints from '../../utils/endpoints';
import { ICountry } from '../../pages/Home/types';
import useFetch from '../../hooks/useFetch';
import { CountryProvider } from '../../contexts/CountryContext';

export default function Layout() {
    const { data, loading } = useFetch<ICountry[]>(endpoints.all);

    const [mode, setMode] = useContext(ModeContext);

    const toggleMode = () => {
        setMode(mode === 'light' ? 'dark' : 'light');
    };

    return (
        <div
            style={{
                minHeight: '100svh',
                backgroundColor: theme[mode].palette.background.default,
            }}
        >
            <Grid container>
                <AppBar position='static'>
                    <Container maxWidth='xl'>
                        <Toolbar style={{ padding: 0 }}>
                            <Grid container justifyContent='space-between'>
                                <Grid item display='flex' alignItems='center'>
                                    <Typography variant='h6' fontWeight='bold'>
                                        Where in the world?
                                    </Typography>
                                </Grid>
                                <Grid
                                    item
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <IconButton onClick={toggleMode}>
                                        {mode === 'light' ? (
                                            <DarkModeOutlined />
                                        ) : (
                                            <DarkMode />
                                        )}
                                    </IconButton>
                                    <Typography>Dark mode</Typography>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </Container>
                </AppBar>
                <Container maxWidth='xl'>
                    <Toolbar />
                    {loading ? (
                        <CircularProgress size={50} />
                    ) : (
                        <CountryProvider value={data as ICountry[]}>
                            <Outlet />
                        </CountryProvider>
                    )}
                </Container>
            </Grid>
        </div>
    );
}
