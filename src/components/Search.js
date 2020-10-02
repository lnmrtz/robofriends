import React from 'react';

const SearchBox = (props) => {
    return (
        <div className="pa2">
            <input onChange={props.onSearchChange} className="pa3 b2 b--green bg-lightest-blue" type="search" placeholder="Search a robot"/>
        </div>
    )
}
export default SearchBox;