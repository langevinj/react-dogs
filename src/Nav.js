import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"

function Nav(dogs){
    return(
        <ul className="NavBar">
            {dogs.dogs.map(dog => (<li key={dog.name} className="nav-link"><Link to={`/dogs/${dog.name}`}>{dog.name}</Link></li>))}
        </ul>
    )
}

export default Nav;