import React from "react";
import {Titulo} from '/components/titulo'

export function FormularioRegistro(){

    return(
                
        <form className="form1">
            <Titulo/>
            
            <h4>Gestion de paquetes - Registro</h4>
            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
                    aria-controls="pills-login" aria-selected="true">Login</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
                    aria-controls="pills-register" aria-selected="false">Registrarse</a>
                </li>
            </ul>
            

            
            <div className="form-outline mb-4">
                <input 
                    type="text" 
                    id="loginName" 
                    classNameName="form-control" 
                    name ="nombre"
                    placeholder="Nombres"
                    />
                    
                
            </div>

            <div className="form-outline mb-4">
                <input 
                    type="text" 
                    id="loginName" 
                    classNameName="form-control" 
                    name ="usuario"
                    placeholder="Usuario"
                />
                    
                
            </div>
            <div className="form-outline mb-4">
                <input 
                type="password" 
                id="loginPassword" 
                classNameName="form-control"
                placeholder="Contraseña"
            />
                
            </div>
            <div className="form-outline mb-4">
                <input 
                    type="email" 
                    id="loginName" 
                    classNameName="form-control" 
                    name ="email"
                    placeholder="Correo"
                />
                    
                
            </div>

            <div className="row mb-4">
                <div className="col-md-6 d-flex justify-content-center"></div>
            </div>

            <div className="col-md-6 d-flex justify-content-center">
            
                
                
            </div>

            
            <button type="submit" className="btn btn-primary btn-block mb-4">Registrarse</button>

            
        </form>   
              
            
            
        

    )
    
}