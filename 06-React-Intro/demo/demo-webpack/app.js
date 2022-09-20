import React from "react";
import ReactDOM  from "react-dom";
import Network from "./src/Network.js"
import Predictions from "./src/Predictions.js";

const lines = [
    {
        name: "Linea A",
        station: "Retiro",
        time: [0, 1, 2]
    },
    {
        name: "Linea B",
        station: "L Alem",
        time: [4, 5, 6]
    },
    {
        name: "Linea C",
        station: "Constitucion",
        time: [7, 8, 9]
    },
    {
        name: "Linea D",
        station: "Congreso de Tucuman",
        time: [10, 11, 12]
    },
    
]


function App(){
    return(
        <div>
            <Network lines={lines}/>
            <Predictions stationName="Nueva Estacion" />
        </div>
    )
}



ReactDOM.render(<App />, document.getElementById("app"))