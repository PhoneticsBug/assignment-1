import React, { useState, useEffect } from 'react';

const SearchResults = ({ search, data }) => {
    const handleItemClick = (result) => {
        window.open(`https://clinicaltrialskorea.com/studies?conditions=${result.sickNm}`, '_blank');
    };

    const [selectedItem, setSelectedItem] = useState(0);

    const filteredResults = data.filter(item =>
        item.sickNm.toLowerCase().includes(search.toLowerCase())
    );

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            setSelectedItem((prev) => (prev < filteredResults.length - 1 ? prev + 1 : prev));
        } else if (e.key === 'ArrowUp') {
            setSelectedItem((prev) => (prev > 0 ? prev - 1 : prev));
        } else if (e.key === 'Enter') {
            if (filteredResults[selectedItem]) {
                handleItemClick(filteredResults[selectedItem]);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <div className='search-results'>
            {filteredResults.length === 0 ? (
                <p className='no-result'> 검색어 없음</p>
            ) : (
                filteredResults.map((result, index) => (
                    <p
                        className={selectedItem === index ? 'result-line selected' : 'result-line'}
                        key={result.sickCd}
                        onClick={() => handleItemClick(result)}
                        onKeyDown={handleKeyDown}
                        tabIndex={0}
                    >
                        🔍︎ {result.sickNm}
                    </p>
                ))
            )}
        </div>
    );
};


export default SearchResults;
