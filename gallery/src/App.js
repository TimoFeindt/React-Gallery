import { useState } from "react";
import SearchInput from "./components/SearchInput";
import RecievedImageBox from "./components/RecievedImageBox";
import GalleryBox from "./components/GalleryBox";
import './css/main.css'

export default function App() {

  const [fetchValues, setFetchValues] = useState([])
  const [arrayOfImageObject, setArrayOfImageObject] = useState([])

  const handleFetchValue = (data) => {
    setFetchValues(data)
  }

  const handleGrandchildImageClick = (image) => {
    const updateImageArray = [
      ...arrayOfImageObject,
      image
    ]
    setArrayOfImageObject(updateImageArray)
  }

  return (
    <div className="gallery">
      <h1>Gallery</h1>
      Create a list with images and a subheadline.
      <SearchInput handleFetchValue={handleFetchValue} />
      <RecievedImageBox fetchValues={fetchValues} forwardSelectedImage={handleGrandchildImageClick}/>
      <GalleryBox imageList={arrayOfImageObject}/>
    </div>
  );
}
