import { createContext, useState } from 'react';

export type Mode = 'light' | 'dark';
export type ModeContextType = [Mode, (mode: Mode) => void];

const ModeContext = createContext<ModeContextType>(['light', console.error]);

export const ModeProvider = ({ children }: { children: React.ReactNode }) => {
    const modeState = useState<Mode>('light');

    return (
        <ModeContext.Provider value={modeState}>
            {children}
        </ModeContext.Provider>
    );
};

export default ModeContext;
