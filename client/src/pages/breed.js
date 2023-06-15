import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./breed.css"

function Breed() {


    const [breedData, setBreedData] = useState();
    const [breedImages, setBreedImages] = useState();

    const { breedId } = useParams();
    useEffect(() => {
        fetch("/api/breed/" + breedId)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setBreedData(data[0])
            });

        fetch("/api/breed/image/" + breedId)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setBreedImages(data)
            });
    }, [breedId]);
    return (
        <div>
            {breedData && breedImages &&
                <div className="breed">
                    <h2>{breedData.name}</h2>
                    <a href="/">Back</a>
                    <p>{breedData.description}</p>

                    <div className="image-wrapper">
                        {breedImages.map((image, index) => (
                            <div className="cat-image" key={index}>
                                <img src={image.url}></img>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div >


    );
}

export default Breed;
