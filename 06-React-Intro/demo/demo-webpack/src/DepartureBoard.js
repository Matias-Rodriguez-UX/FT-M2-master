import React from "react";
import Trains from "./Trains.js"

function DepartureBoard({platformNro}){
    let trains = ["Constitución", "Hospitales", "Caseros", "Retiro", "Alem"]
    return(
        <div> 
            <h1>Platform {platformNro}</h1>
            <Trains trains={trains}/>
        </div>
    )
}

export default DepartureBoard;