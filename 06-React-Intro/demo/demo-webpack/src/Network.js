import React from "react";
import Line from "./Line";

export default function Network({lines}){
    return(
        <div>
            {
                lines.map(l => <Line name={l.name} station={l.station}/>  )
            }
        </div>
    )
}
