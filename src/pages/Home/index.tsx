import { AppBar, Grid, Toolbar, Typography } from '@mui/material';

export default function Home() {
    return (
        <Grid container>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6'>
                        <strong>Where in the world?</strong>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Typography variant='h1'>Home</Typography>
        </Grid>
    );
}
