import { useState } from "react"

export default function RecievedImage({image, selectedImage}) {

    const [newTitle, setNewTitle] = useState('')

    //WCAG hinzufügen
    
    // bestimmtes img an parent senden
    const handleImageclick = () => {        
        const newImage =  {
            ...image,
            title: newTitle
        }
        selectedImage(newImage)
    }
    
    // induviduellen title hinzufügen
    const handleNewTitle = (e) => {
        const title = e.target.value.trim();
        setNewTitle(title)
    }


    // TODO: Controlled input feld anlegen - reset input 

    return(
        <div className="fetch__card">
            <img src={image.urls.thumb} alt={image.alt_description} className="fetch__image" onClick={handleImageclick}/>
            <input className="fetch__input" placeholder="Add your own title" onChange={handleNewTitle}/>
        </div>
    )
}