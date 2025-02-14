import React, { useEffect, useState } from 'react';

const DataFetcher = ({ onDataFetched }) => {
    const [lastFetched, setLastFetched] = useState(null);
    const expireTime = 60 * 1000; // 1분 (기본 ms)
    const serverURL = process.env.REACT_APP_SERVER_URL;

    useEffect(() => {
        const fetchData = async () => {
            const currentTime = new Date().getTime();

            if (!lastFetched || (currentTime - lastFetched > expireTime)) {
                try {
                    const response = await fetch(serverURL);
                    const data = await response.json();
                    console.info("calling api");
                    onDataFetched(data);
                    setLastFetched(currentTime); // 마지막으로 데이터를 가져온 시간 갱신
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            } else {
                console.info("Using cached data");
            }
        };

        fetchData();
    }, [lastFetched, onDataFetched, expireTime, serverURL]);

    return null;
};

export default DataFetcher;
