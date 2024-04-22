'use client'
import React, {useState} from 'react';
import SearchIcon from "../../../public/header/Search";

const Search = () => {
    const [searchText, setSearchText] = useState("");

    const onSearch = (e: string) => {
        setSearchText(e);
    }


    const onChange = (e: any) => {
        setSearchText(e.target.value);
    }


    return (
        <div style={{display: 'flex'}}>
            <input
                className={'header__search'}
                onClick={(e) => {
                    onChange(e)
                }}

            />
            <i className="header__icon"><SearchIcon/></i>
        </div>
    );
};

export default Search;