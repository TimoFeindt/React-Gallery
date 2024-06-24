export default function GalleryImage({image, removeItem}) {

    // onClick hinzufügen, der die spezifische Card umdreht um den Author und die Description zu erhalten.
    // title muss dem Image Object noch hinzugefügt werden.
    // add delte 
    const handleDelete = () => {
        removeItem(image)
    }

    return(
        <div className="gallery__card">
            <img src={image.urls.small} alt={image.alt_description} className="gallery__image"/>
            <span className="gallery__titleFader"></span>
            <h5 className="gallery__title">Title: Muss ich noch hinzufügen</h5>
            <span className="gallery__delete" onClick={handleDelete}></span>
            <div className="gallery__cardBack">
                <p className="gallery__description">Description: {image.description}</p>  
                <span className="gallery__author">Author: {image.user.first_name} {image.user.last_name}</span>
            </div>
             
        </div>
    )
}