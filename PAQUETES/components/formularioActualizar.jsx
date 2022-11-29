import React from "react";
import {Titulo} from '/components/titulo'
import {Fecha} from '/components/fecha'
import {Estado} from '/components/estado'
import { Dimensiones } from "/components/dimensiones";
import {EntradasOrdenes} from "/components/entradasOrdenes";
import {Boton} from "/components/boton";

export function FormularioActualizar(){
    return(
       <>
        <div className="mi-borde">
                <form  className="formulario">
                    <Titulo/>
                    <h4>Gestión de paquetes-Actualizar Orden</h4>
                    <Fecha/>
                    <Estado/>
                    <Dimensiones/>
                    <EntradasOrdenes/>
                    <Boton/>      
                </form>
        </div>
       
       </>
    )
}