import { useState } from "react"
import CrossIcon from "../icon/CrossIcon"

export default function GalleryImage({image, removeItem}) {

    const [isSpinning, setIsSpinning] = useState(false)

   
    // TODO: Title zum Image Object hinzugefügen und hier darstellen.
    
    const handleDelete = () => {
        removeItem(image)
    }

     // onClick hinzufügen, der die spezifische Card umdreht um den Author und die Description zu erhalten.
    const addSpinning  = () => {
        setIsSpinning(!isSpinning)
    }

    return(
        <div className={`gallery__card ${isSpinning ? 'spinner' : '' }`} onClick={addSpinning}>
            <div className="gallery__cardFront">
                <img src={image.urls.small} alt={image.alt_description} className="gallery__image"/>
                <span onClick={handleDelete}>
                    <CrossIcon />
                </span>
                { (image.title !== '') 
                    ?   <>
                            <span className="gallery__titleFader"></span>
                            <h5 className="gallery__title">Title: {image.title} </h5>
                        </> 
                    : ''
                }
            </div>
            
            
            <div className="gallery__cardBack">
                <span onClick={handleDelete} >
                    <CrossIcon />
                </span>
                <p className="gallery__description">Description: {image.description}</p>  
                <span className="gallery__author">Author: {image.user.first_name} {image.user.last_name}</span>
            </div>
             
        </div>
    )
}