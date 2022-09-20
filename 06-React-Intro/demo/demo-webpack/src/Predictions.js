import React from "react";
import DepartureBoard from "./DepartureBoard"

export default function Predictions({stationName}){
    return (
        <div>
            <h1>{stationName}</h1>
            <DepartureBoard platformNro="1"/>
            <DepartureBoard platformNro="2"/>
        </div>
    )
}
