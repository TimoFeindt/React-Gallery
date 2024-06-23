import { useEffect, useState } from "react"

export default function SearchInput({handleFetchValue}) {

    const ACCESS_KEY = 'AkGQpvg2WkB67UahKovoTffqp1xSAyfoXymlh29LRjM';
    
    const [inputValue, setInputValue] = useState('')
    const [fetchedImageList, setFetchedImageList] = useState([])
    

    const handleInputChange = (e) => {        
        const trimmedValue = e.target.value.trim();
        setInputValue(trimmedValue);
        
    }

    const handleSearchSubmit = () => {
        if(inputValue === '') {
            return
        } else {
            // Es wird ein fetch mit dem inputValue ausgeführt 
            // Danach wird die InputValue wieder auf empty gesetzt
            fetchingImage(inputValue);
            setInputValue('')
        }
    }

    // fetch erstellen

    const fetchingImage = async (query) => { 
        
        const response = await fetch(`https://api.unsplash.com/search/photos/?query=${query}&per_page=1&client_id=${ACCESS_KEY}`); // unsplash api - 5 resutls per request and client_id
        const data = await response.json();
        const imageResults = data.results
        
        setFetchedImageList(imageResults)
        
    }

    useEffect(() => {
        handleFetchValue(fetchedImageList)
    }, [handleFetchValue, fetchedImageList])

    return(
        <div>
            Ich bin der Input Component
            {fetchedImageList.map((image, index) => {
                return <div key={index}>{image.alt_description}</div>
            })}
            
            <label htmlFor="">Search Input</label>
            <input placeholder="Suche nach Bildern" type="text" onChange={handleInputChange} />
            <button onClick={handleSearchSubmit}>Search</button>
        </div>
    )
}