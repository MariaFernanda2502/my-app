import React from 'react';
import './Card.css';
import yo4 from './yo4.jpg';
import {
    BrowserRouter as Router, 
    Route,
    Link, 
    Switch,
} from 'react-router-dom';


function Card () {
    return (
        <div id = 'card'> 
            <img id = 'yo' src= {yo4} />
            <div className = 'informacion'>
                <h2 id = 'nombre'> Fernanda Salvador </h2>
                <p className = 'informacion'> A01274800@itesm.mx </p>
                <p className = 'informacion'> Instragram: fersalvador_25 </p>
            </div>
            <div>
                Login page!
            </div>
            <Link to = "/"> Pagina principal </Link>
        </div>
    ); 
}

export default Card;