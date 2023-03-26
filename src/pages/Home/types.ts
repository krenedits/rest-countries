export interface ICountry {
    name: {
        common: string;
    };
    population: number;
    region: string;
    capital: string;
    flags: {
        svg: string;
        alt: string;
    };
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
