import React from "react";
import NavBar from "./components/NavBar";
import TravelLocation from "./components/TravelLocations";
import data from "./data";



export default function App(){

    const tripCards =data.map(item=>{
        return(
            <TravelLocation 
                    key={item.id}
                    title={item.title}
                    location={item.location}
                    googleMapsUrl={item.googleMapsUrl}
                    startDate={item.startDate}
                    endDate={item.endDate}
                    description={item.description}
                    imageUrl={item.imageUrl}
                />
        )
    })
        return(
            <div>
                <NavBar />
                {tripCards}
            </div>
        )
}