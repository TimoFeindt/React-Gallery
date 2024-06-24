import GalleryImage from "./GalleryImage";

export default function GalleryBox({imageList, deleteItem}) {

    const handleDeleteItem = (item) => {
        deleteItem(item)
    }

    // merge GalleryImage into GalleryBoy to decrease component nesting

    return(
        <div className="gallery__area">
            {imageList.map(image => {
                return (<GalleryImage key={image.id} image={image} removeItem={handleDeleteItem}/>)
                })
            }
        </div>
    )
}