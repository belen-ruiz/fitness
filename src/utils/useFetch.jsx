import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState([]); //null?
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            getData(url);
        }, 3000);
    }, []);

    const getData = async (url) => {
        try {
            const response = await fetch(url, {
                method: "GET",
            });
            const dataJSON = await response.json();
            //data que contiene RESULTS
            //console.log(data)
            dataJSON.results.map(async (item) => {
                const res = await fetch(item.url),
                dataItemJSON = await res.json();
                //console.log(data); //ok
                const dataItem = {
                    id: dataItemJSON.id,
                    name: dataItemJSON.name,
                    avatar: dataItemJSON.sprites.front_default,
                };
                setData((dataItemJSON) => [...dataItemJSON, dataItem]);
                //console.log(data)
            });

            setLoading(false);
            setError({ err: false });

            if (!response.ok) {
                throw {
                        err: true,
                        status: response.status,
                        statusText: !response.statusText
                            ? "Ocurrió un error"
                            : response.statusText,
                    };}
        } catch (err) {
            setLoading(true);
            setError(err);
        }
    };

    console.log(data);

    return { data, loading, error };
};
