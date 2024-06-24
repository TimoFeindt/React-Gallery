export default function RecievedImage({image, selectedImage}) {

   //WCAG hinzufügen

    //send specific img back to parent
    const handleImageclick = () => {
        selectedImage(image)
    }

    return(
        <div onClick={handleImageclick} className="fetch__card">
            <img src={image.urls.thumb} alt={image.alt_description} className="fetch__image"/>
            <h3>Ich bin eine Card</h3>
        </div>
    )
}