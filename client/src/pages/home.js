import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css"

function Home() {
  const [breedData, setBreedData] = useState();
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const goToBreed = (catBreedObj) => {
    navigate(`/breed/${catBreedObj.id}`, {
      state: {
        catBreedObj
      }
    })
  };

  useEffect(() => {
    fetch("/api/breeds")
      .then((res) => res.json())
      .then((data) => setBreedData(data));
  }, []);


  const search = (e) => {
    setKeyword(e.target.value);
  }
  return (
    <div className="Home">
      <div className="search-box-wrapper">
        <p>Start typing a cat breed, and Select from the list below</p>
        <input className="search-box" type="text" name="search" value={keyword} onChange={search} />
        {breedData && (keyword ?
          <ul>
            {breedData.breeds.map((catBreedObj, index) =>
              catBreedObj.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 && (
                <li key={index}>
                  <a onClick={() => goToBreed(catBreedObj)} href="">{catBreedObj.name}</a>
                </li>
              )
            )}
          </ul> :
          <div>
            <div>favBreeds:</div>
            <ul>
              {breedData.favBreeds.map((breed, index) =>
                <li key={index}>{breed.id}: {breed.clickCount}</li>)}
            </ul>
          </div>)}

      </div>

      <div>

      </div>

    </div>
  );
}

export default Home;
