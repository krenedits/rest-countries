import { ThemeProvider } from '@mui/material';
import { useContext } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ModeContext from './contexts/ModeContext';
import Home from './pages/Home';
import theme from './utils/theme';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
]);

function App() {
    const [mode] = useContext(ModeContext);
    return (
        <ThemeProvider theme={theme[mode]}>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
