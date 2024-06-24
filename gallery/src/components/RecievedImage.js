export default function RecievedImage({image, selectedImage}) {

   //WCAG hinzufügen

    //send specific img back to parent
    const handleImageclick = () => {
        selectedImage(image)
    }

    return(
        <div onClick={handleImageclick} className="fetch__card">
            <h3>Ich bin eine Card</h3>
            <img src={image.urls.small} alt={image.alt_description} className="fetch__image"/>
        </div>
    )
}