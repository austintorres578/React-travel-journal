import React from "react";
import planet from "../images/white-globe-icon-24.jpg"

export default function NavBar(){
    return(
        <nav className="nav--bar">
            <img src={planet}></img><p>my travel journal.</p>
        </nav>
    )
}