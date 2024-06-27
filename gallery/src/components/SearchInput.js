import { useEffect, useState, useRef } from "react"

export default function SearchInput({handleFetchValue}) {

    const ACCESS_KEY = 'AkGQpvg2WkB67UahKovoTffqp1xSAyfoXymlh29LRjM';
    
    const [inputValue, setInputValue] = useState('')
    const [fetchedImageList, setFetchedImageList] = useState([])
    
    const inputEl = useRef()

    // Input von leerzeichen befreien
    const handleInputChange = (e) => {
        const trimmedValue = e.target.value.trim();
        setInputValue(trimmedValue);
    }

    // sobald die Page geöffnet wird soll das input feld gefocused sein
    useEffect(() => {
        inputEl.current.focus();
    }, [])

    //TODO: controlled Input erstellen vallue={inputValue} noch mehr reinlesen
    const handleSearchSubmit = () => {
        if(inputValue === '') {
            return
        } else {
            // Es wird ein fetch mit der inputValue ausgeführt 
            // Danach wird die InputValue wieder auf empty gesetzt
            fetchingImage(inputValue);
            setInputValue('')
        }
    }

    // check für key press code damit die Suche intuitiver wird
    const handleKeyPress = (e) => {
        if(e.code === 'Enter') handleSearchSubmit(); 
    }

    // fetch erstellen 
    const fetchingImage = async (query) => { 
        const response = await fetch(`https://api.unsplash.com/search/photos/?query=${query}&orientation=squarish&per_page=5&client_id=${ACCESS_KEY}`); // unsplash api - 5 resutls per request and client_id
        const data = await response.json();
        const imageResults = data.results;
        setFetchedImageList(imageResults)
    }

    useEffect(() => {
        handleFetchValue(fetchedImageList)
    }, [handleFetchValue, fetchedImageList]) 

    return(
        <div className="search">            
            <label htmlFor="searchInput" className="search__label">Search Input</label>
            <input ref={inputEl} name="searchInput" placeholder="Suche nach Bildern" type="text" onChange={handleInputChange} onKeyDown={handleKeyPress} className="search__input"/>
            <button onClick={handleSearchSubmit} className="search__button">Search</button>
        </div>
    )
}