import React from "react";

export function Fecha(){
    return(
        <>
            <div className="form-outline mb-4 fecha">
                <label forHtmltml="start">Fecha:</label>
                <input type="date" id="start" name="trip-start" value="2022-11-22" min="2018-01-01" max="2018-12-31"/>
                <label forHtml="start"className="hora"> Hora: </label>
                <input type="time" id="start" name="trip-start" value="08:00"min="12:00" max="18:00"/>
            </div>
        </>
    )
}