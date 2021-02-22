import React from 'react';
import {
    BrowserRouter as Router, 
    Route,
    Link, // Nos premite tener todo el historial
    Switch,
  } from 'react-router-dom';

function Pagina() {
    return (
        <div>
            <div>
            !Hello World!
            <img src = "https://cdn.pixabay.com/photo/2021/01/22/22/39/buildings-5941345__340.jpg" />
        </div>
            <Link to = "/"> Pagina principal </Link>
        </div>
    );
}

export default Pagina;