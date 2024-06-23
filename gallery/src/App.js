import { useState } from "react";
import SearchInput from "./components/SearchInput";
import RecievedImageBox from "./components/RecievedImageBox";

export default function App() {

  const [fetchValues, setFetchValues] = useState([])

  function handleFetchValue(data) {
    setFetchValues(data)
  }

  return (
    <div className="App">
      <h1>Gallery</h1>
      Create a list with images and a subheadline.
      <SearchInput handleFetchValue={handleFetchValue} />
      <RecievedImageBox fetchValues={fetchValues}/>
    </div>
  );
}
