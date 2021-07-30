import React, { useState, useEffect } from "react";
import BreedList from "./client/components/breedList.js";
import SearchBar from "./client/components/searchBar.js";

export default function App() {
    const [dogs,setDogs] = useState([]);

    return (
        <div id="container">
            
            <SearchBar/>
            <BreedList/>
        </div>
    )
}