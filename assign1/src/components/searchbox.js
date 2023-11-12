import React from 'react';


const SearchBox = ({ value, onChange }) => {
    return (
        <div className='search-box'>
            <input 
                className='search-input' 
                type="text" value={value} 
                onChange={onChange}
                placeholder='질환명을 입력해 주세요.' />
            <button className='search-btn'> 🔍︎ </button>
        </div>
    );
};

export default SearchBox;
