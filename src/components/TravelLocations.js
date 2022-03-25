import React from "react";
import mapIcon from "../images/map-pin.png"

export default function TravelLocation(props){
    return (
        <div className="travel--location--container">
            <div className="img--container">
                <img src={props.imageUrl}></img>
            </div>
            <div>
                <div className="location--header">
                    <img src={mapIcon}></img>
                    <p>{props.location}</p>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div className="location--info">
                    <h1>{props.title}</h1>
                    <p className="trip--date">{props.startDate} - {props.endDate}</p>
                    <p className="trip--description">{props.description}</p>
                </div>
            </div>
        </div>
    )
}