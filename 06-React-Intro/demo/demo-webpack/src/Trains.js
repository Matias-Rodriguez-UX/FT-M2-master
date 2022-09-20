import React from "react";

export default function Trains({trains}){
    return(
            trains.map(t =><h3>{t}</h3>)
    )
}

