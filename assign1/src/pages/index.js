import React, { useState, useEffect } from 'react';
import SearchBox from '../components/searchbox.js';
import SearchResults from '../components/searchresult.js';
import DataFetcher from '../components/datafetcher.js'; // DataFetcher 컴포넌트를 import
import "../css/searchpage.css"

const SearchPage = () => {
    const [search, setSearch] = useState("");
    const [sickData, setSickData] = useState([]);

    const onDataFetched = (data) => {
        setSickData(data);
    };

    const onSearchChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <>
        
            <div className='search-page'>
                <h1 className='search-title'>국내 모든 임상시험 검색하고
 온라인으로 참여하기</h1>
                <SearchBox value={search} onChange={onSearchChange} />
                {/* <SearchResults search={search} data={sickData} /> */}
                {search && <SearchResults search={search} data={sickData} />}
                <DataFetcher onDataFetched={onDataFetched} />
            </div>
        </>
    );
};

export default SearchPage;
