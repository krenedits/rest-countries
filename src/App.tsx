import { ThemeProvider } from '@mui/material';
import { useContext } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ModeContext from './contexts/ModeContext';
import Home from './pages/Home';
import theme from './utils/theme';
import { Layout } from './components';
import Country from './pages/Country';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/:cca3',
                    element: <Country />,
                },
                {
                    path: '*',
                    element: <div>Not found</div>,
                },
            ],
        },
    ],
    {
        basename: import.meta.env.VITE_BASENAME,
    }
);

function App() {
    const [mode] = useContext(ModeContext);
    return (
        <ThemeProvider theme={theme[mode]}>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
