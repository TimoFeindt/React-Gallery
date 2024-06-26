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

  // add image and avoid doublicates
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
    // remove image with specific ID

    const removeImage = arrayOfImageObjects.filter(({id}) => {
      return  id !== data.id
    })
    setArrayOfImageObject(removeImage)
  }

  //TODO: delete all button

  return (
    <div className="gallery">
      <h1 className="gallery__headline">Gallery</h1>
      <span className="gallery__subHeadline">Create a list with images and a subheadline.</span>  
      <SearchInput handleFetchValue={handleFetchValue} />
      <RecievedImageBox fetchValues={fetchValues} forwardSelectedImage={handleAddImage}/>
      <GalleryBox imageList={arrayOfImageObjects} deleteItem={handleDeleteItem}/>
    </div>
  );
}
