import React, { useEffect } from 'react';

const DataFetcher = ({ onDataFetched }) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4000/sick');
                const data = await response.json();
                onDataFetched(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // 빈 배열을 의존성 배열로 사용하여 컴포넌트가 처음 한 번만 실행되도록 설정

    return null;
};

export default DataFetcher;
