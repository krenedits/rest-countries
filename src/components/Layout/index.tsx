import { DarkMode, DarkModeOutlined } from '@mui/icons-material';
import {
    AppBar,
    Container,
    Grid,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material';
import { useContext } from 'react';
import ModeContext from '../../contexts/ModeContext';
import theme from '../../utils/theme';
import { LayoutProps } from './types';

export default function Layout({ children }: LayoutProps) {
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
                    {children}
                </Container>
            </Grid>
        </div>
    );
}
