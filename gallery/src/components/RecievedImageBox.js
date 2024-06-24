import RecievedImage from "./RecievedImage"

export default function RecievedImageBox({fetchValues, forwardSelectedImage}) {
    
    // handle clickedImage
    const handleSelectedImage = (image) => {
        forwardSelectedImage(image)
    }

    
    return(
        <div className="fetched__image">
            Ich bin die Box in der die Images vom fetch landen. 
            {fetchValues.map(image => {
                return ( 
                    <RecievedImage key={image.id} image={image} selectedImage={handleSelectedImage}/>
                )
            })}
            
        </div>
    )
}