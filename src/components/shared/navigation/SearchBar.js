import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
const SearchBar = () => {
    const navigate = useNavigate();

    const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue'))
    const handleSearch = () => {
        const mysearch = document.getElementById('SearchBar').value
        if (mysearch) {
            localStorage.setItem('searchValue', mysearch)
            setSearchValue(localStorage.getItem('searchValue'))
            navigate(`/search/${searchValue}`); //like here
        }else{
            alert(`Search something `)
        }
    }

    console.log("sate:", searchValue)
    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <input
                    type="search"
                    placeholder="Search"
                    className="input"
                    aria-label="Search"
                    id='SearchBar'
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)}
                />

                <span className=" bg-danger px-3 input" onClick={handleSearch}> <BsSearch className='searchbar' /></span>
            </div>
        </>
    );
};

export default SearchBar;