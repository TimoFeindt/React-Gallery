import RecievedImage from "./RecievedImage"

export default function RecievedImageBox({fetchValues, forwardSelectedImage}) {
    
    // handle clickedImage
    const handleSelectedImage = (image) => {
        forwardSelectedImage(image)
    }
    
    return(
        <div className="fetch__box">
            {fetchValues.map(image => {
                return ( 
                    <RecievedImage key={image.id} image={image} selectedImage={handleSelectedImage}/>
                )
            })}
            
        </div>
    )
}