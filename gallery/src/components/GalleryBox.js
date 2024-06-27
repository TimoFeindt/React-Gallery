import GalleryImage from "./GalleryImage";

export default function GalleryBox({imageList, deleteItem}) {

    const handleDeleteItem = (item) => {
        deleteItem(item)
    }

    // TODO: GalleryImage in GalleryBox verwenden um weniger component nesting zu verwenden. usecontext für statemanagement evtl oder redux

    return(
        <div className="gallery__area">
            {imageList.map(image => {
                return (<GalleryImage key={image.id} image={image} removeItem={handleDeleteItem}/>)
                })
            }
        </div>
    )
}