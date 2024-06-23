export default function RecievedImage({image}) {

    //styling hinzufügen
    //img tag und headline hinzufügen

    return(
        <div>
            <h3>Ich bin eine Card</h3>
            <img src={image.urls.small} alt={image.alt_description} />
            <h5>Title: {image.alt_description} </h5>
            <p>{image.description}</p>
        </div>
    )
}