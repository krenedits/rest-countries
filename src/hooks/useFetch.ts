import { useEffect, useState } from 'react';

interface FetchState<T> {
    loading: boolean;
    error: unknown;
    data: T | null;
}

export default function useFetch<T>(url: string) {
    const [state, setState] = useState<FetchState<T>>({
        loading: true,
        error: null,
        data: null,
    });

    const fetchUrl = async () => {
        setState({ loading: true, error: null, data: null });

        try {
            const response = await fetch(url);
            const data = await response.json();

            setState({ loading: false, error: null, data });
        } catch (error) {
            setState({ loading: false, error, data: null });
        }
    };

    useEffect(() => {
        fetchUrl();
    }, []);

    return state;
}
