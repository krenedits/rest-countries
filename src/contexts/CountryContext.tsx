import { createContext } from 'react';
import { ICountry } from '../pages/Home/types';

export type CountryContextType = ICountry[];

const CountryContext = createContext<CountryContextType>([]);

export const CountryProvider = ({
    value,
    children,
}: {
    value: ICountry[];
    children: React.ReactNode;
}) => {
    return (
        <CountryContext.Provider value={value}>
            {children}
        </CountryContext.Provider>
    );
};

export default CountryContext;
