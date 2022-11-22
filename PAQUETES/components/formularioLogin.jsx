import React from "react";
import {Titulo} from '/components/titulo'
export function FormularioLogin(){

    return(
               
        <form className="form1">
            
                
            <Titulo/>
            <br/><br/>
            
            <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
                    aria-controls="pills-login" aria-selected="true">Login</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
                    aria-controls="pills-register" aria-selected="false">Registrarse</a>
                </li>
            </ul>
            <br/>

            <div className="form-outline mb-4">
                <input 
                    type="text" 
                    id="loginName" 
                    name="usuario"
                    className="entrada" 
                    placeholder="Usuario"
                    />
                    
                
            </div>

            <div className="form-outline mb-4">
                <input 
                type="password" 
                id="loginPassword" 
                name="contraseña"
                className="entrada"
                placeholder="Contraseña"
                />
                
            </div>

            <div className="row mb-4">
                <div className="col-md-6 d-flex justify-content-center"></div>
            </div>

            <div className="col-flex justify-content-center">
            
                <a href="#!">Olvidó la contraseña?</a>
                
            </div>
            <br/>
            <div className="cont-boton">
                <button type="submit" className="btn btn-primary btn-block mb-4 btn-login">Login</button>
            </div>
            
        </form>   
        
              
            
            
        

    )
    
}