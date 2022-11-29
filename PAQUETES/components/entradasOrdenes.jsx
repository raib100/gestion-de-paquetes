import React from "react";

export function EntradasOrdenes(){
    return(
        <>
            <div className="form-outline mb-4 mis-entradas">
                <input type="text"
                    id="loginName1"
                    className="entrada"
                    placeholder="Dirección de recogida" required/> 
            
                <input type="text" 
                    id="loginName" 
                    className="entrada"
                    placeholder="Ciudad de recogida" required/>
            
                <input type="text"
                    id="loginName"
                    className="entrada"
                    placeholder="Nombre destinatario" required/>
        
                <input type="text" 
                    id="loginName"
                    className="entrada"
                    placeholder="Cédula/Nit destinatario" required/>
            
                <input type="text"
                    id="loginName"
                    className="entrada"
                    placeholder="Dirección de entrega" required/> 

                <input type="text"
                    id="loginName"
                    className="entrada"
                    placeholder="Ciudad de entrega" required/>
            </div>
        </>
    )
}