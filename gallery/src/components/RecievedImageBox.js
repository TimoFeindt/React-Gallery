import RecievedImage from "./RecievedImage"

export default function RecievedImageBox({fetchValues}) {
    console.log('RecievedImageBox: ')
    console.log(fetchValues)
    // map erstellen um alle 5 images anzuzeigen.

    /* const newImageList = images.map(image => {
        return ( console.log(image)
        const updateImageList = []
        )
    }) */
    return(
        <div>
            Ich bin die Box in der die Images vom fetch landen. 
            {fetchValues.map(image => {
                return ( 
                    <RecievedImage key={image.id} image={image}/>
                )
            })}
            
        </div>
    )
}