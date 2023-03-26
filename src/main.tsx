import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ModeProvider } from './contexts/ModeContext';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ModeProvider>
            <App />
        </ModeProvider>
    </React.StrictMode>
);
