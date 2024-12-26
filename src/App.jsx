import ItemGrid from './components/ItemGrid.jsx'
import SearchBar from './components/SearchBar.jsx'

import arr from '../data.json'
import {useState} from "react";

function App() {
    let [shownArr, setShownArr] = useState([...arr])

    function updateItems(val) {
        const newArr = arr.filter((item) => {
            return item.name.toLowerCase().startsWith(val.toLowerCase());
        })
        setShownArr(newArr);
    }

    return (
        <>
            <SearchBar updateItems={updateItems}/>
            <ItemGrid items={shownArr}/>
        </>
    )
}

export default App
