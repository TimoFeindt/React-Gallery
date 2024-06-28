import { useState } from "react";
import SearchInput from "./components/SearchInput";
import RecievedImageBox from "./components/RecievedImageBox";
import GalleryBox from "./components/GalleryBox";
import './css/main.css'

export default function App() {

  const [fetchValues, setFetchValues] = useState([])
  const [arrayOfImages, setArrayOfImages] = useState([])

  const handleFetchValue = (data) => {
    setFetchValues(data)
  }

  // image hinzufügen und duplicate vermeiden
  const handleAddImage = (image) => {
    const doubleImage = arrayOfImages.find(({id}) => {
      return image.id === id
    })
    
    if(!doubleImage) {
      const updateImageArray = [
        ...arrayOfImages,
        image
      ]
      setArrayOfImages(updateImageArray)
    }
  }

  const handleDeleteItem = (data) => {
    // ausgewähltes image aus dem Array werfen
    const removeImage = arrayOfImages.filter(({id}) => {
      return  id !== data.id
    })
    setArrayOfImages(removeImage)
  }

  return (
    <div className="gallery">
      <h1 className="gallery__headline">Gallery</h1>
      <span className="gallery__subHeadline">Create a list with images and a subheadline.</span>  
      <SearchInput handleFetchValue={handleFetchValue} />
      <RecievedImageBox fetchValues={fetchValues} forwardSelectedImage={handleAddImage}/>
      <GalleryBox imageList={arrayOfImages} deleteItem={handleDeleteItem}/>
      <button onClick={() => setArrayOfImages([])}>Remove all!</button>
    </div>
  );
}
