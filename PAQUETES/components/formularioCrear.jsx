import React from "react";
import {Titulo} from '/components/titulo'
import {Fecha} from '/components/fecha'
import { Dimensiones } from "/components/dimensiones";
import {EntradasOrdenes} from "/components/entradasOrdenes";
import {Boton} from "/components/boton";
export function FormularioCrear(){
    return(
            <>
                <div className="mi-borde">
                    <form  className="formulario">
                        <Titulo/>
                        <h4>Gestión de paquetes-Crear Orden</h4>
                        
                        <Fecha/>
                        <Dimensiones/>
                        <EntradasOrdenes/>
                        <Boton/>
                        
                       
                    </form>
                </div>
                
            </>
               
           
            
       
    )
}