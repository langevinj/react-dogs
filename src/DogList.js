import React from 'react' 
import { v4 as uuid} from 'uuid'
import "./DogList.css"
import { Link } from 'react-router-dom'

function DogList(dogInfo){
    return(
        <div className="DogList">
            {dogInfo.dogInfo.map(dog => 
            (<ul key={uuid()}>
                    <Link to={`/dogs/${dog.name}`}><img src={dog.src} className="DogList-img"></img></Link>
                <li>{dog.name}</li>
                <li>Age: {dog.age}</li>
                {dog.facts.map(fact => (<li key={uuid()}>{fact}</li>))}
            </ul>))}
        </div>
    )
}

export default DogList;