import React, { useEffect } from 'react';

const DataFetcher = ({ onDataFetched }) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4000/sick');
                const data = await response.json();
                console.info("calling api")
                onDataFetched(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // 빈 배열 === 처음 로딩될 때 한번만 호출됨

    return null;
};

export default DataFetcher;
