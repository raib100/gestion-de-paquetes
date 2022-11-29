import React from "react";

export function Estado(){
    return(
        <>
            <div className="estado">
                <label forHtmltml="start" id="start">Estado</label>
                <select className="form-select estado" aria-label="Default select example">
                    <option selected></option>
                    <option value="guardado">Guardado</option>
                    <option value="cancelado">Cancelado</option>
                    <option value="cumplido">Cumplido</option>
                </select>
            </div>
        </>


    )
}