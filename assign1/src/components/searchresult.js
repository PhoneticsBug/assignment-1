import React from 'react';

const SearchResults = ({ search, data }) => {
    const filteredResults = data.filter(item =>
        item.sickNm.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className='search-results'>
            {search.length > 0 ? (
                <ul>
                    {filteredResults.map(result => (
                        <li className='result-line' key={result.sickCd}>{result.sickNm}</li>
                    ))}
                </ul>
            ) : (
                <p>검색어를 입력하세요.</p>
            )}
        </div>
    );
};

export default SearchResults;
