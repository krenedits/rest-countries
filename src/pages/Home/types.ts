export interface ICountry {
    name: {
        common: string;
        nativeName: Record<string, { official: string; common: string }>;
    };
    population: number;
    region: string;
    capital: string;
    flags: {
        svg: string;
        alt: string;
    };
    cca3: string;
    borders: string[];
    area: number;
    nativeName: {
        common: string;
    };
    subregion: string;
    tld: string[];
    currencies: Record<
        string,
        {
            name: string;
            symbol: string;
        }
    >;
    languages: Record<string, string>;
}

export interface CountryFilter {
    name: string;
    region: string;
}

export interface CountriesProps {
    filter: CountryFilter;
}

export interface FilterProps {
    countryFilterState: [
        CountryFilter,
        React.Dispatch<React.SetStateAction<CountryFilter>>
    ];
}
