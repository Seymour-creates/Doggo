import React, { useState, useEffect } from "react";


export default function SearchBar() {
    const [searchBar,setSearch] = useState('');

    
    return (
        <input type="text" placeholder="search for doggo"></input>
    )
}