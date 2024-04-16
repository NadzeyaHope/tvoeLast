'use client'
import React, {useState} from 'react';
import SearchIcon from "../../../public/header/Search";

const Search = () => {
    const [searchText, setSearchText] = useState("");
    const onSearch = (e) => {
        setSearchText(e);
    }
    const onChange = (e) => {
        setSearchText(e.target.value);
    }
    return (
        <div style={{display : 'flex'}} >
            <input
                className={'search'}
                onClick={(e) => {
                    onChange(e)
                }}

            />
            <i className="icon"><SearchIcon/></i>
        </div>
    );
};

export default Search;