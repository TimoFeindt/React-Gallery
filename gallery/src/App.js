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

  const handleGrandchildImageClick = (image) => {
    const updateImageArray = [
      ...arrayOfImageObjects,
      image
    ]
    setArrayOfImageObject(updateImageArray)
  }

  const handleDeleteItem = (data) => {
    // find image object with id and remove it from the arrayOfImageObjects
    console.log(data)
    
  }

  return (
    <div className="gallery">
      <h1 className="gallery__headline">Gallery</h1>
      <span className="gallery__subHeadline">Create a list with images and a subheadline.</span>  
      <SearchInput handleFetchValue={handleFetchValue} />
      <RecievedImageBox fetchValues={fetchValues} forwardSelectedImage={handleGrandchildImageClick}/>
      <GalleryBox imageList={arrayOfImageObjects} deleteItem={handleDeleteItem}/>
    </div>
  );
}
