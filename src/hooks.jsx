import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedSol, setSelectedSol] = useState()

    console.log(data)

    async function fetchUrl() {
        const response = await fetch(url);
        const json = await response.json();
        const marsWeather = json.sol_keys.map((solKey => {
            return {
                sol: solKey,
                maxTemp: json[solKey].PRE.mx
            }
        }))

        setData(marsWeather);
        setSelectedSol(marsWeather.length - 1)
        setLoading(false);
    }
        useEffect(()=> {
            fetchUrl();
        }, []);

        return [data, loading]

}

export { useFetch }
