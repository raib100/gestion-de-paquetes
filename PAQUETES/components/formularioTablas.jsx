import React from "react";
import {Titulo} from '/components/titulo'
export function FormularioTablas(){

    return(

       
        <div className="row">
            
            <div className="titulo2">
                <Titulo/>
                <h2>Gestión de paquetes-Listado de órdenes</h2>
            </div>
            <br></br>
            <br></br>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col"># Servicio</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Ciudad de entrega</th>
                    <th scope="col">Dirección de entrega</th>
                    <th scope="col">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="columna">
                    <th scope="row">1</th>
                    <td>01/01/2022</td>
                    <td>Medellín</td>
                    <td>Calle 20 cra 25</td>
                    <td>Entregado</td>
                    
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>01/12/2022</td>
                    <td>Cali</td>
                    <td>Calle 50 tranversal 15</td>
                    <td>En reparto</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>18/12/2022</td>
                    <td>Bogotá</td>
                    <td>Calle 18 carrera 10</td>
                    <td>Cancelado</td>
                    </tr>
                </tbody>
            </table>
            <br/><br/>
            <button type="submit" className="btn btn-primary btn-block mb-4">Crear nueva órden</button>      
        </div>

    )
}