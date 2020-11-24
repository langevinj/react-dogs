import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { v4 as uuid } from 'uuid'

function DogDetails(dogs) {
    const { name } = useParams();
    const [currentDog, setCurrentDog] = useState(null);

    useEffect(() => {
        function getCurrentDog(){
            const res = dogs.dogs.filter(dog => dog.name === name)
            setCurrentDog(res[0])
        }
        getCurrentDog()
    }, [name]);

    let theDog = currentDog ? (<ul key={currentDog.name}>
        <img src={currentDog.src} className="Dog-img" />
        <li>{currentDog.name}</li>
        <li>Age: {currentDog.age}</li>
        {currentDog.facts.map(fact => (<li key={uuid()}>{fact}</li>))}
         </ul>) : null

    return (
        <div className="DogDetails">
            {theDog}
            
        </div>
    )
}

export default DogDetails;