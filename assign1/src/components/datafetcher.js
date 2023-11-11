import React, { useEffect, useState } from 'react';

const DataFetcher = ({ onDataFetched }) => {
    const [lastFetched, setLastFetched] = useState(null);
    const expireTime = 60 * 1000; // 1분 (기본 ms)
    const serverURL = process.env.REACT_APP_SERVER_URL;

    useEffect(() => {
        const fetchData = async () => {
            const currentTime = new Date().getTime();

            // 만약 마지막으로 데이터를 가져온 시간이 없거나 expire time을 초과했다면 데이터를 가져옴
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
            }
        };

        fetchData();
    }, [lastFetched, onDataFetched, expireTime]);

    return null;
};

export default DataFetcher;
