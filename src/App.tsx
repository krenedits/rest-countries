import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import { ThemeProvider } from '@mui/material';
import theme from './utils/theme';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
]);

function App() {
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
