export default function GalleryImage({image}) {

    // onClick hinzufügen, der die spezifische Card umdreht um den Author und die Description zu erhalten.
    // title muss dem Image Object noch hinzugefügt werden.
    return(
        <div className="gallery__card">
            <img src={image.urls.small} alt={image.alt_description} className="gallery__image"/>
            <h5>Title: Muss ich noch hinzufügen</h5>
            <p className="gallery__description">Description: {image.description}</p>  
            <span className="gallery__author">Author: {image.user.first_name} {image.user.last_name}</span>  
        </div>
    )
}