import { createContext, useState } from 'react';

export type Mode = 'light' | 'dark';
export type ModeContextType = [Mode, (mode: Mode) => void];

const ModeContext = createContext<ModeContextType>(['light', console.error]);

export const ModeProvider = ({ children }: { children: React.ReactNode }) => {
    const [mode, setMode] = useState<Mode>('light');

    return (
        <ModeContext.Provider value={[mode, setMode]}>
            {children}
        </ModeContext.Provider>
    );
};

export default ModeContext;
