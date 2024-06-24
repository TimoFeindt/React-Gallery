import GalleryImage from "./GalleryImage";

export default function GalleryBox({imageList}) {

    return(
        <div className="gallery__area">
            Ich bin die DisplayBox, in mir werden alle Bilder angezeigt

            {imageList.map(image => {
                return (<GalleryImage key={image.id} image={image}/>)
                })
            }
        </div>
    )
}