import { useState } from "react";
import SearchInput from "./components/SearchInput";
import RecievedImageBox from "./components/RecievedImageBox";
import GalleryBox from "./components/GalleryBox";
import './css/main.css'

export default function App() {

  const [fetchValues, setFetchValues] = useState([])
  const [arrayOfImageObjects, setArrayOfImageObject] = useState([])

  const handleFetchValue = (data) => {
    setFetchValues(data)
  }

  // image hinzufügen und duplicate vermeiden
  const handleAddImage = (image) => {
    const doubleImage = arrayOfImageObjects.find(({id}) => {
      return image.id === id
    })
    
    if(!doubleImage) {
      const updateImageArray = [
        ...arrayOfImageObjects,
        image
      ]
      setArrayOfImageObject(updateImageArray)
    }
  }

  const handleDeleteItem = (data) => {
    // ausgewähltes image aus dem Array werfen
    const removeImage = arrayOfImageObjects.filter(({id}) => {
      return  id !== data.id
    })
    setArrayOfImageObject(removeImage)
  }

  return (
    <div className="gallery">
      <h1 className="gallery__headline">Gallery</h1>
      <span className="gallery__subHeadline">Create a list with images and a subheadline.</span>  
      <SearchInput handleFetchValue={handleFetchValue} />
      <RecievedImageBox fetchValues={fetchValues} forwardSelectedImage={handleAddImage}/>
      <GalleryBox imageList={arrayOfImageObjects} deleteItem={handleDeleteItem}/>
      <button onClick={() => setArrayOfImageObject([])}>Remove all!</button>
    </div>
  );
}
