import {useState} from "react";

function SearchBar(props) {
    const {updateItems} = props;
    const [searchBar, setSearchBar] = useState('');

    return (
        <>
            <input value={searchBar} className={"searchBar"} onChange={(event) => {
                setSearchBar(event.target.value);
            }}/>
            <button onClick={() => {
                updateItems(searchBar);
            }}> Search </button>
        </>
    )
}

export default SearchBar