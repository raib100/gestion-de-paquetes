import React from "react";

export function Dimensiones(){
    return(
        <>
            <div className="form-outline mb-4 dimensiones" >
                <label forHtml="floatingInput" className="dim-largo">Largo</label>
                <input type="text" className="dimension" name="largo" required/>
                <label forHtml="floatingInput"className="ent-dim">Ancho</label>
                <input type="text" className="dimension" name="ancho" required/>
                <label forHtml="floatingInput"className="ent-dim">Alto</label>
                <input type="text" className="dimension" name="alto" required/>
                <label forHtml="floatingInput"className="ent-dim">Peso</label>
                <input type="text" className="dimension" name="peso" required/>
            </div>
        
        </>
    )
}